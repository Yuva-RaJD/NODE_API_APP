import { getToken, setToken } from "./Common";

//@allowed Origin
//LOCAL HOST
const BASE_URL = "http://localhost:5500";

//POST login user
// form data

export const loginUser = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    if (response.status === 200 && response.status) {
      const result = await response.json();
      console.log(result);
      setToken(result.data.token);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

//POST register user
//form data
export const registerUser = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/api/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.status === 201 && response.status) {
      const result = await response.json();
      return {
        data: result,
        status: true,
      };
    } else {
      const result = await response.json();
      return {
        data: result,
        status: false,
      };
    }
  } catch (error) {
    return {
      data: null,
      status: false,
    };
  }
};

export const getUser = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/api/users/`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (response.ok && response.status === 200) {
      return {
        data: result,
        status: true,
      };
    } else {
      return {
        data: result,
        status: false,
      };
    }
  } catch (error) {
    return {
      data: null,
      status: false,
    };
  }
};
