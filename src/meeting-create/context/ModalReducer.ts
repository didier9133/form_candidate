interface ModalState {
  open: boolean;
}

type ModalAction =
  | {
      type: "OPEN_MODAL";
    }
  | {
      type: "CLOSE_MODAL";
    };

export const modalReducer = (state: ModalState, action: ModalAction) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        open: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};
