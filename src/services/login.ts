import { loginUserOnServer, logoutOnServer } from "../api/loginApi";

export const BEER_TAP_USERNAME = "beer-tap-username";
export const BEER_TAP_TOKEN = "beer-tap-token";

export type LoginArgs = {
  username: string;
  password: string;
};

export const getLoggedUser = () => {
  return localStorage.getItem(BEER_TAP_USERNAME);
};

export const loginUser = ({ username, password }: LoginArgs) => {
  return loginUserOnServer({ username, password }).then(
    ({ token, username }) => {
      localStorage.setItem(BEER_TAP_USERNAME, username);
      localStorage.setItem(BEER_TAP_TOKEN, token);
    }
  );
};

export const logout = () => {
  logoutOnServer().then(() => {
    localStorage.removeItem(BEER_TAP_USERNAME);
    localStorage.removeItem(BEER_TAP_TOKEN);
  });
};
