import { createContext, useState, useContext } from "react";
import { instance } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";
import { iElement } from "../components/listbody/cardtech";
import axios from "axios";

interface iTechContextProps {
  children: React.ReactNode;
}
export interface iTechEdit {
  status: string;
}

interface iTechContext {
  DefineModal: (
    setModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  CloseModal: (setModal: React.Dispatch<React.SetStateAction<boolean>>) => void;
  DefineEditModal: (
    element: iElement,
    setEditModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  CloseEditModal: (
    setEditModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  tech: iElement | null;
  focus: string;
  setFocus: React.Dispatch<React.SetStateAction<string>>;
  AddTech: (data: iTechAdd) => void;
  EditTech: (data: iTechEdit) => void;
  DeleteTech: (
    setEditModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  setTechId: React.Dispatch<React.SetStateAction<string>>;
}

export interface iTechAdd {
  title: string;
  status: string;
}

// interface iSetModal {
//   setModal: React.Dispatch<React.SetStateAction<boolean>>
// }

export const TechContext = createContext({} as iTechContext);
export const TechProvider = ({ children }: iTechContextProps) => {
  const { userTech, setUserTech } = useContext(UserContext);
  const [tech, setTech] = useState<iElement | null>(null);
  const [techId, setTechId] = useState("");
  const [focus, setFocus] = useState("");
  const token = localStorage.getItem("@kenzieHub:token");
  const DefineModal = (
    setModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setModal(true);
  };

  const CloseModal = (
    setModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setModal(false);
  };

  const DefineEditModal = (
    element: iElement,
    setEditModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setTech(element);
    setFocus(element?.title);
    setEditModal(true);
  };

  const CloseEditModal = (
    setEditModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setEditModal(false);
    setFocus("");
    setTech(null);
  };

  const AddTech = (data: iTechAdd) => {
    const id = toast.loading("Please wait...");
    const registerTech = async () => {
      try {
        instance.defaults.headers.authorization = `Token ${token}`;
        const resp = await instance.post("/users/techs", data);
        toast.update(id, {
          render: `Tecnologia cadastrada com sucesso`,
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
        setUserTech([...userTech, resp.data]);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (
            err.response?.data.message ===
            "User Already have this technology created you can only update it"
          ) {
            toast.update(id, {
              render: `Você já possui essa tecnológia!`,
              type: "error",
              isLoading: false,
              autoClose: 1000,
            });
          }
        }
        console.error(err);
      }
    };
    registerTech();
  };
  const EditTech = (data: iTechEdit) => {
    const id = toast.loading("Please wait...");
    const updateTech = async () => {
      try {
        instance.defaults.headers.authorization = `Token ${token}`;
        await instance.put(`/users/techs/${techId}`, data);
        toast.update(id, {
          render: `Tecnologia atualizada com sucesso`,
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });

        const newTech = userTech.find(
          (element) => element.title === tech?.title
        );
        if (newTech) {
          newTech.status = data.status;
        }
        setUserTech([...userTech]);
      } catch (err) {
        toast.update(id, {
          render: `Não foi possivel alterar seu Status`,
          type: "error",
          isLoading: false,
          autoClose: 1000,
        });
        console.error(err);
      }
    };
    updateTech();
  };

  const DeleteTech = (
    setEditModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const id = toast.loading("Please wait...");
    const removeTech = async () => {
      try {
        instance.defaults.headers.authorization = `Token ${token}`;
        await instance.delete(`/users/techs/${techId}`);
        toast.update(id, {
          render: `Tecnologia Deletada com Sucesso`,
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
        setTechId("");
      } catch (err) {
        toast.update(id, {
          render: `Não foi possivel remover a tecnologia`,
          type: "error",
          isLoading: false,
          autoClose: 1000,
        });
        console.error(err);
      }
    };
    removeTech();

    setTimeout(() => {
      CloseEditModal(setEditModal);
      setUserTech(userTech.filter((element) => element.title !== tech?.title));
    }, 1000);
  };

  return (
    <TechContext.Provider
      value={{
        DefineModal,
        CloseModal,
        DefineEditModal,
        CloseEditModal,
        tech,
        focus,
        setFocus,
        AddTech,
        EditTech,
        DeleteTech,
        setTechId,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
