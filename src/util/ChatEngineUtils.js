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
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
};

export const isAuthenticated = () => {
  if (!localStorage.getItem("username")) return false;
  else if (!localStorage.getItem("password")) return false;
  else return true;
};

export const authenticatedUser = () => {
  return {
    username: localStorage.getItem("username"),
    password: localStorage.getItem("password"),
  };
};
