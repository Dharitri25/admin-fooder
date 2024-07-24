import { Box, Button, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../utils/Header";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { RestaurantsData } from "../../data/restaurantData";
import { useState } from "react";
import DeleteConfirmationModal from "../../utils/deleteConfirmationModal/DeleteConfirmationModal";
import RestaurantEditModal from "../../utils/addEditModal/RestaurantAddEditModal";

const Restaurants = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [addEditDetails, setAddEditDetails] = useState();
  const [addEditModalOpen, setAddEditModalOpen] = useState("");

  const rows = RestaurantsData.map((row, index) => ({
    ...row,
    seqId: index + 1,
  }));

  const columns: GridColDef[] = [
    {
      field: "seqId",
      headerName: "Index",
    },
    {
      field: "restaurantName",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      hideSortIcons: true,
      disableColumnMenu: true,
      renderCell: ({ row }: any) => {
        console.log({ row });
        return (
          <Box>
            <IconButton
              onClick={() => {
                setAddEditModalOpen("Edit");
                setAddEditDetails(row);
              }}
            >
              <BorderColorIcon />
            </IconButton>
            <IconButton onClick={() => setDeleteModalOpen(true)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="RESTAURANTS" subtitle="Managing the Restaurants" />
      <Box>
        <Button
          sx={{
            backgroundColor: colors.greenAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
          onClick={() => setAddEditModalOpen("Add")}
        >
          Add New Restaurant
        </Button>
      </Box>
      <Box
        m="40px 0 0 0"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            fontSize: "14px"
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
        <DataGrid rows={rows} columns={columns} />
      </Box>
      {deleteModalOpen && (
        <DeleteConfirmationModal
          open={deleteModalOpen}
          setOpen={setDeleteModalOpen}
          title="Restaurant"
        />
      )}
      {addEditModalOpen && (
        <RestaurantEditModal
          open={addEditModalOpen}
          setOpen={setAddEditModalOpen}
          addEditDetails={addEditDetails}
          setAddEditDetails={setAddEditDetails}
        />
      )}
    </Box>
  );
};

export default Restaurants;
