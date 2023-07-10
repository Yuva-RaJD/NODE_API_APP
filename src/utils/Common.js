//GET user token
export const getToken = () => {
  const token = sessionStorage.getItem("token");
  if (token === "" || token === null) {
    return {
      token: "",
      status: false,
    };
  } else {
    return {
      token: token,
      status: true,
    };
  }
};
//SET user token
export const setToken = (token) => {
  sessionStorage.setItem("token", token);
  return {
    token: token,
    status: true,
  };
};
//DELETE user token
export const removeToken = () => {
  sessionStorage.removeItem("token");
  return {
    token: "",
    status: true,
  };
};
//CHECK  user LOGIN STATUS
export const isLoggedIn = () => {
  const token = sessionStorage.getItem("token");
  if (token === "" || token === null) {
    return false;
  } else {
    return true;
  }
};
