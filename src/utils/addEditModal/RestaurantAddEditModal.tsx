import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";

interface RestaurantAddEditModalProps {
  open: string;
  setOpen: React.Dispatch<React.SetStateAction<string>>;
  addEditDetails: any;
  setAddEditDetails: any;
}

const RestaurantAddEditModal: React.FC<RestaurantAddEditModalProps> = ({
  open,
  setOpen,
  addEditDetails,
  setAddEditDetails,
}) => {
  const handleClose = () => {
    setAddEditDetails({});
    setOpen("");
  };

  useEffect(() => {
    open === "Add" && setAddEditDetails({});
  }, [open]);

  return (
    <Dialog open={open !== ""} onClose={handleClose} fullWidth>
      <DialogTitle id="alert-dialog-title" variant="h3">
        {open} Restaurant
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
        <Box component="form" sx={{ mt: 3 }}>
          <Grid item xs={12} mt={4}>
            <TextField
              fullWidth
              label="Restaurant Name"
              value={addEditDetails?.restaurantName}
              onChange={(e) =>
                setAddEditDetails({
                  ...addEditDetails,
                  restaurantName: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} mt={4}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              value={addEditDetails?.email}
              onChange={(e) =>
                setAddEditDetails({
                  ...addEditDetails,
                  email: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} mt={4}>
            <TextField
              fullWidth
              label="First Name"
              value={addEditDetails?.firstName}
              onChange={(e) =>
                setAddEditDetails({
                  ...addEditDetails,
                  firstName: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} mt={4}>
            <TextField
              fullWidth
              label="Last Name"
              value={addEditDetails?.lastName}
              onChange={(e) =>
                setAddEditDetails({
                  ...addEditDetails,
                  lastName: e.target.value,
                })
              }
            />
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            handleClose();
            console.log(addEditDetails);
          }}
        >
          Save
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RestaurantAddEditModal;
