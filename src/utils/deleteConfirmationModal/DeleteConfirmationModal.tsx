import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import "./styles.css";

interface DeleteModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

const DeleteConfirmationModal: React.FC<DeleteModalProps> = ({
  open,
  setOpen,
  title,
}) => {
  const handleClose = () => setOpen(false);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="smallModel"
    >
      <DialogTitle id="alert-dialog-title" variant="h3">
        Confirm Delete {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" variant="h5">
          Are you sure want to delete this {title}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="success" onClick={handleClose}>
          Yes
        </Button>
        <Button variant="outlined" color="error" onClick={handleClose}>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationModal;
