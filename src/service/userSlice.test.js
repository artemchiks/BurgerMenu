import { userReducer, setUser, logout } from "./userSlice";
import { User } from "./userSlice";

describe("Тестирование редьюсера user", () => {
  const initialState = null;

  test("Должен установить пользователя", () => {
    const user = {
      email: "test@example.com",
      name: "Test User",
    };

    const newState = userReducer(initialState, setUser(user));
    expect(newState).toEqual(user);
  });

  test("Должен выйти из системы", () => {
    const stateWithUser = {
      email: "test@example.com",
      name: "Test User",
    };

    const newState = userReducer(stateWithUser, logout());
    expect(newState).toBeNull();
  });
});
