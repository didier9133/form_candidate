"use client";

import { ModalContext } from "@/meeting-create/context/ModalContext";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { useContext } from "react";

interface ModalProps {
  title: string;
  content: string;
}

export const Modal = ({ title, content }: ModalProps) => {
  const { stateModal, toggleModal } = useContext(ModalContext);

  return (
    <Dialog
      open={stateModal.open}
      onClose={toggleModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ whiteSpace: "normal" }} id="alƒert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleModal} autoFocus>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
