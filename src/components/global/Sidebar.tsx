import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import StorefrontIcon from "@mui/icons-material/Storefront";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

interface ItemProps {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: (title: string) => void;
}

interface SideBarProps {
  loginDetails: any;
}
const Item: React.FC<ItemProps> = ({
  title,
  to,
  icon,
  selected,
  setSelected,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography fontSize={title === "Dashboard" ? "20px" : "15px"}>
        {title}
      </Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SideBar: React.FC<SideBarProps> = ({ loginDetails }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [admin, setAdmin] = useState();

  useEffect(() => {
    if (loginDetails?.email) {
      let name = loginDetails.email.split("@")[0];
      setAdmin(name);
    }
  }, [loginDetails?.email]);

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#2e7c67 !important",
        },
        "& .pro-menu-item.active": {
          color: "#299d7d !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Avatar>
                  <AdminPanelSettingsIcon />
                </Avatar>
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  textTransform="capitalize"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {admin}
                </Typography>
                <Typography fontSize="15px" color={colors.greenAccent[500]}>
                  {loginDetails?.email}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Manage
            </Typography>
            <Item
              title="Manage Restaurants"
              to="/restaurants"
              icon={<StorefrontIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage Orders"
              to="/orders"
              icon={<FastfoodIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Billing"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SideBar;
