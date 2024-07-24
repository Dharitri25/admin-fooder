import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import { Box, Button, IconButton, useTheme } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { ColorModeContext, tokens } from "../../theme";

interface TopBarProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar: React.FC<TopBarProps> = ({ setIsLogin }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    setIsLogin(false);
    localStorage.removeItem("authDetails");
    navigate("/");
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        sx={{ backgroundColor: colors.primary[400] }}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS AND BUTTON */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <Button
          sx={{
            backgroundColor: colors.greenAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
          onClick={() => handleSignOut()}
        >
          Sign Out
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
