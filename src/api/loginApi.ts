export type LoginArgs = {
  username: string;
  password: string;
};

export const loginUserOnServer = ({ username, password }: LoginArgs) => {
  // For this skill assesment, as far as we do not have a user list, all users
  // and passwords will be accepted, but there is one exception: If user puts "_"
  // as password we will show an authentication error.
  return new Promise<{ token: string; username: string }>((resolve, reject) => {
    setTimeout(() => {
      if (password !== "_") {
        resolve({
          token: "foo-bar",
          username,
        });
      } else {
        reject(new Error("INCORRECT LOGIN"));
      }
    }, 500);
  });
};

export const logoutOnServer = () => {
  // We simulate the operation on the server to succesfully log out a user
  return new Promise<{ isUserDeleted: boolean }>((resolve) => {
    setTimeout(() => {
      resolve({ isUserDeleted: true });
    }, 500);
  });
};
