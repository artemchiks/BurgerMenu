import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE, WS_SEND_MESSAGE } from "./actionsTypes";
import { IMessage } from "./modelData";

  
  export interface IWSConnectionStart {
    readonly type: typeof WS_CONNECTION_START;
  }
  
  export interface IWSConnectionSuccess {
    readonly type: typeof WS_CONNECTION_SUCCESS;
    readonly payload: Event;
  }
  
  export interface IWSConnectionError {
    readonly type: typeof WS_CONNECTION_ERROR;
    readonly payload: Event;
  }
  
  export interface IWSConnectionClosed {
    readonly type: typeof WS_CONNECTION_CLOSED;
    readonly payload: Event;
  }
  
  export interface IWSGetMessage {
    readonly type: typeof WS_GET_MESSAGE;
    readonly payload: IMessage;
  }
  
  export interface IWSSendMessage {
    readonly type: typeof WS_SEND_MESSAGE;
    readonly payload: { message: string };
  }
  
  export type TWSActions =
    | IWSConnectionStart
    | IWSConnectionSuccess
    | IWSConnectionError
    | IWSConnectionClosed
    | IWSGetMessage
    | IWSSendMessage;
  
  export const wsAction = {
    wsInit: WS_CONNECTION_START,
    wsSendMessage: WS_SEND_MESSAGE,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onError: WS_CONNECTION_ERROR,
    onMessage: WS_GET_MESSAGE,
  };