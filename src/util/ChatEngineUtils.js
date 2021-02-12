const usernameStr = "username";
const passwordStr = "password";

export const isImage = (message) =>
  message &&
  message.attachments &&
  message.attachments?.length > 0 &&
  message.attachments[0] &&
  message.attachments[0].file;

export const projectID = "1ddc2650-e4a3-49b2-a059-2d9efac5bfb2";

export const authObject = (username, password, projectId = projectID) => {
  return {
    "Project-ID": projectID,
    "User-Name": username,
    "User-Secret": password,
  };
};

export const setAuthenticated = (username, password) => {
  localStorage.setItem(usernameStr, username);
  localStorage.setItem(passwordStr, password);
};

export const logout = () => {
  localStorage.removeItem(usernameStr);
  localStorage.removeItem(passwordStr);
};

export const isAuthenticated = () => {
  if (!localStorage.getItem(usernameStr)) return false;
  else if (!localStorage.getItem(passwordStr)) return false;
  else return true;
};

export const authenticatedUser = () => {
  if (isAuthenticated()) {
    return {
      username: localStorage.getItem(usernameStr),
      password: localStorage.getItem(passwordStr),
    };
  } else throw new Error("No user authenticated");
};
