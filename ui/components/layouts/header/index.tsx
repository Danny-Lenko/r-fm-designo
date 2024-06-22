import { useState } from "react";
import Box from "@mui/material/Box";
import HeaderAppbar from "./headerAppbar";
import { styles } from "./styles";
import dynamic from "next/dynamic";

const HeaderDrawer = dynamic(() => import("./headerDrawer"));

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={styles} component="header">
      <HeaderAppbar handleDrawerToggle={handleDrawerToggle} />

      <HeaderDrawer
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />

      <Box
        className="overlay"
        sx={{ display: mobileOpen ? "block" : "none" }}
      ></Box>
    </Box>
  );
}
