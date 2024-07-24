import { tokens } from "../../theme";
import Header from "../../utils/Header";
import { Box, useTheme } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StorefrontIcon from "@mui/icons-material/Storefront";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import StatBox from "../../utils/StatBox";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(9, 1fr)"
        gridAutoRows="150px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[400] }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="100"
            subtitle="Total Restaurants"
            icon={
              <StorefrontIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[400] }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12345"
            subtitle="Total Orders"
            icon={
              <FastfoodIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[400] }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441 €"
            subtitle="Total earning"
            icon={
              <AttachMoneyIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
