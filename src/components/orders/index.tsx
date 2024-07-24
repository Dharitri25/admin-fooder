import { Box, Button, IconButton, Popover, useTheme } from "@mui/material";
import Header from "../../utils/Header";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { tokens } from "../../theme";
import { OrdersData } from "../../data/restaurantData";
import { useState } from "react";
import DeleteConfirmationModal from "../../utils/deleteConfirmationModal/DeleteConfirmationModal";
import OrderDetailsModal from "../../utils/addEditModal/OrderDetailModal";

const Orders = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const openMoreOption = Boolean(anchorEl);

  const rows = OrdersData.rows.map((row, index) => ({
    ...row,
    seqId: index + 1,
  }));

  const columns: GridColDef[] = [
    {
      field: "seqId",
      headerName: "Sl. No.",
    },
    {
      field: "id",
      headerName: "Order Id",
    },
    {
      field: "client_first_name",
      headerName: "Client Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "restaurant_name",
      headerName: "Restaurant Name",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "total_price",
      headerName: "Total Price (€)",
      flex: 1,
    },
    {
      field: "payment",
      headerName: "Payment",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      hideSortIcons: true,
      disableColumnMenu: true,
      renderCell: () => {
        return (
          <Box>
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
              <MoreVertIcon />
            </IconButton>
            <Popover
              open={openMoreOption}
              anchorEl={anchorEl}
              onClose={() => setAnchorEl(null)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              sx={{ boxShadow: "0px 1px 5px -3px rgba(0, 0, 0, 0.2)" }}
            >
              <Box display="grid" m="5px 15px">
                <Button
                  color="inherit"
                  onClick={() => {
                    setAnchorEl(null);
                    setDeleteModalOpen(true);
                  }}
                >
                  Reject Order
                </Button>
                <Button
                  color="inherit"
                  onClick={() => {
                    setAnchorEl(null);
                  }}
                >
                  Bill Layout
                </Button>
              </Box>
            </Popover>
          </Box>
        );
      },
    },
  ];

  const handleRowClick = (params: GridRowParams<any>) => {
    setOrderDetails(params?.row);
    setShowDetailModal(true);
  };

  return (
    <Box m="20px">
      <Header title="ORDERS" subtitle="Managing the Orders" />
      <Box
        m="40px 0 0 0"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            fontSize: "14px",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.greenAccent[700],
            borderBottom: "none",
            fontSize: "18px",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.greenAccent[800],
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          onRowClick={(e) => handleRowClick(e)}
        />
      </Box>
      {deleteModalOpen && (
        <DeleteConfirmationModal
          open={deleteModalOpen}
          setOpen={setDeleteModalOpen}
          title="Order"
        />
      )}
      {showDetailModal && (
        <OrderDetailsModal
          open={showDetailModal}
          setOpen={setShowDetailModal}
          orderDetails={orderDetails}
          setOrderDetails={setOrderDetails}
        />
      )}
    </Box>
  );
};

export default Orders;
