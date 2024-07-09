import { createContext } from "react";

interface ModalContextProps {
  stateModal: {
    open: boolean;
  };
  toggleModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);
