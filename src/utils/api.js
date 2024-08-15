export const BASE_URL = "https://norma.nomoreparties.space/api";

export const ORDERS_URL = `${BASE_URL}/orders`;
export const INGRIDIENTS_URL = `${BASE_URL}/ingredients`;

export const AUTH_API = "https://norma.nomoreparties.space/api";

export const LOGIN_API = `${AUTH_API}/auth/login`;
export const REGISTER_API = `${AUTH_API}/auth/register`;
export const LOGOUT_API = `${AUTH_API}/auth/logout`;
export const TOKEN_API = `${AUTH_API}/auth/token`;
export const PASSWORD_REST_EMAIL = `${AUTH_API}/password-reset`;
export const PASSWORD_REST_PASS = `${AUTH_API}/password-reset/reset`;
export const USER_API = `${AUTH_API}/auth/user `;

export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";

//Messages
export const LOGIN_ERROR_MESSAGE = "Неверное имя пользователя или пароль";
export const EXIST_EMAIL_MESSAGE = "Пользователь с таким Email уже существует.";
export const USER_UPDATE_ERROR_MESSAGE =
  "При обновлении профиля произошла ошибка.";
export const ORDER_SERVER_ERROR_MESSAGE =
  "При заказе бургера произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";
export const SERVER_ERROR_MESSAGE =
  "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";
export const REGISTER_ERROR_MESSAGE =
  "При регистрации пользователя произошла ошибка.";
export const USER_UPDATE_MESSAGE = "Данные успешно обновлены!";
export const FORGOT_PASSWORD_MESSAGE =
  "Письмо с дальнейшей инструкцией отправлено Вам на почту!";
export const RESET_PASSWORD_MESSAGE = "Ваш пароль успешно обновлен!";
