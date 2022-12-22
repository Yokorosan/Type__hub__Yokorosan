import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { instance } from "../services/api";
import { toast } from "react-toastify";
import { iUserRegistration } from "../pages/register";
import { iUserLogin } from "../pages/login";
import axios from "axios";

interface iUserContextProps {
  children: React.ReactNode;
}
export interface iUserLoggedTech {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface iUserLogged {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  techs: iUserLoggedTech[] | [];
  works: [];
  avatar_url: string | null;
  token: string;
}

interface iUserContext {
  registerUser(data: iUserRegistration): void;
  loginUser(data: iUserLogin): void;
  user: iUserLogged | null;
  setUser: React.Dispatch<React.SetStateAction<iUserLogged | null>>;
  loading: boolean;
  userTech: iUserLoggedTech[] | [];
  setUserTech: React.Dispatch<React.SetStateAction<iUserLoggedTech[] | []>>;
}

// interface iUser {

// }

// interface iUserTech {

// }
export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState<iUserLogged | null>(null);
  const [userTech, setUserTech] = useState([] as iUserLoggedTech[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@kenzieHub:token");
      if (token) {
        try {
          instance.defaults.headers.common.authorization = `Token ${token}`;
          const { data } = await instance.get("/profile");
          setUser(data);
          console.log(data);
          setUserTech(data.techs);
        } catch (err) {
          console.error(err);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  const loginUser = (data: iUserLogin) => {
    const id = toast.loading("Please wait...");
    const loginUserInfo = async () => {
      try {
        const resp = await instance.post("/sessions", data);

        const { user: userResponse } = resp.data;
        setUser(userResponse);
        localStorage.setItem("@kenzieHub:token", resp.data.token);
        localStorage.setItem("@kenzieHub:UserId", userResponse.id);

        toast.update(id, {
          render: `Seja bem Vindo ${resp.data.user.name}`,
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
        const toNavigate = location.state?.from?.pathname || "dashboard";
        navigate(toNavigate, { replace: true });
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (
            err.response?.data.message ===
            "Incorrect email / password combination"
          ) {
            toast.update(id, {
              render: "E-mail ou Senha incorreta",
              type: "error",
              isLoading: false,
              autoClose: 1000,
            });
          }
        }
      }
    };
    loginUserInfo();
  };

  const registerUser = (data: iUserRegistration) => {
    const newData = {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module,
    };

    const RegisterUserInfo = async () => {
      const id = toast.loading("Please wait...");
      try {
        await instance.post("/users", newData);
        toast.update(id, {
          render: `Cadastro realizado com sucesso`,
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
        navigate("/", { replace: true });
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.response?.data.message === "Email already exists") {
            toast.update(id, {
              render: "Esse E-mail já Existe",
              type: "error",
              isLoading: false,
              autoClose: 1000,
            });
          }
        }
      }
    };
    RegisterUserInfo();
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        registerUser,
        user,
        setUser,
        loading,
        userTech,
        setUserTech,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
