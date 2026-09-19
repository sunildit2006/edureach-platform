
import API from "./api";

interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    phone?: string;
  };
}

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
  phone?: string;
}): Promise<AuthResponse> => {
  const res = await API.post("/auth/register", data);

  return {
    token: res.data.token,
    user: res.data.user,
  };
};

export const loginUser = async (data: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  const res = await API.post("/auth/login", data);

  return {
    token: res.data.token,
    user: res.data.user,
  };
};

export const getMe = async () => {
  const res = await API.get("/auth/me");

  return res.data;
};
