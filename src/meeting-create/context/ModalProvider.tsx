import { useReducer } from "react";
import { ModalContext } from "./ModalContext";
import { modalReducer } from "./ModalReducer";

interface ModalProviderProps {
  children: React.ReactNode;
}

const initialState = {
  open: false,
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [stateModal, dispatch] = useReducer(modalReducer, initialState);
  const toggleModal = () => {
    dispatch({ type: stateModal.open ? "CLOSE_MODAL" : "OPEN_MODAL" });
  };
  return (
    <ModalContext.Provider
      value={{
        stateModal,
        toggleModal,
      }}>
      {children}
    </ModalContext.Provider>
  );
};
