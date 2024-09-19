import { Middleware, MiddlewareAPI } from "redux";
import { AppDispatch, RootState } from "../store";
import { TWSActions, wsAction } from "../../types/wsActions";

type UpdatedRootState = RootState & {
  user: {
    token: string;
  };
};

export const socketMiddleware = (
  wsUrl: string,
  wsActions: typeof wsAction
): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, UpdatedRootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TWSActions) => {
      const { dispatch } = store;
      const { type } = action;
      const {
        wsInit,
        wsInitOrders,
        wsSendMessage,
        onOpen,
        onClose,
        onError,
        onMessage,
      } = wsActions;

      if (type === wsInit) {
        if (
          socket !== null &&
          (socket.readyState === WebSocket.OPEN ||
            socket.readyState === WebSocket.CONNECTING)
        ) {
          // socket.close();
        }

        socket = new WebSocket(`${wsUrl}/all`);
      }

      if (type === wsInitOrders) {
        if (
          socket !== null &&
          (socket.readyState === WebSocket.OPEN ||
            socket.readyState === WebSocket.CONNECTING)
        ) {
          // socket.close();
        }

        const token = localStorage.getItem("accessToken");
        const refresh = localStorage.getItem("refreshToken");
        let realAccessToken: string = token || "";
        if (realAccessToken.startsWith("Bearer")) {
          realAccessToken = realAccessToken.slice(7);
        }
        socket = new WebSocket(`${wsUrl}?token=${realAccessToken}`);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen });
        };

        socket.onerror = (event) => {
          dispatch({
            type: onError,
            payload: { message: "WebSocket error occurred" },
          });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          try {
            const parsedData = JSON.parse(data);
            const { success, ...restParsedData } = parsedData;

            dispatch({
              type: wsActions.onMessage,
              payload: restParsedData,
            });
          } catch (error) {
            console.error("Error parsing WebSocket message", error);
          }
        };

        socket.onclose = (event) => {
          dispatch({
            type: onClose,
            payload: {
              code: event.code,
              reason: event.reason,
              wasClean: event.wasClean,
            },
          });
        };

        if (type === wsSendMessage && socket.readyState === WebSocket.OPEN) {
          const payload = (action as { payload: any }).payload;
          const message = {
            ...payload,
            token: localStorage.getItem("accessToken"),
          };
          socket.send(JSON.stringify(message));
        }
      }

      return next(action);
    };
  }) as Middleware;
};
