import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";

interface OrderDetailsModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  orderDetails: any;
  setOrderDetails: any;
}

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({
  open,
  setOpen,
  orderDetails,
  setOrderDetails,
}) => {
  const handleClose = () => setOpen(false);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle id="alert-dialog-title" variant="h3">
        Order Details
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
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          component="form"
        >
          <Grid item xs={6}>
            <TextField
              contentEditable={false}
              fullWidth
              label="Order Id"
              value={orderDetails?.id}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              contentEditable={false}
              fullWidth
              label="Restaurant Id"
              value={orderDetails?.restaurant_id}
            />
          </Grid>
          <Grid item xs={6} mt={4}>
            <TextField
              contentEditable={false}
              fullWidth
              label="Client Name"
              value={orderDetails?.client_first_name}
            />
          </Grid>
          <Grid item xs={6} mt={4}>
            <TextField
              contentEditable={false}
              fullWidth
              label="Restaurant Name"
              value={orderDetails?.restaurant_name}
            />
          </Grid>
          <Grid item xs={6} mt={4}>
            <TextField
              contentEditable={false}
              fullWidth
              label="Status"     
              value={orderDetails?.status}
            />
          </Grid>
          <Grid item xs={6} mt={4}>
            <TextField
              contentEditable={false}
              fullWidth
              label="Payment Method"
              value={orderDetails?.payment}
            />
          </Grid>
          <Grid item xs={6} mt={4}>
            <TextField
              contentEditable={false}
              fullWidth
              label="Currency"
              value={orderDetails?.currency}
            />
          </Grid>
          <Grid item xs={6} mt={4}>
            <TextField
              contentEditable={false}
              fullWidth
              label="Total Price (€)"
              value={orderDetails?.total_price}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="inherit" onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDetailsModal;
