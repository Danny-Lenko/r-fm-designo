import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SvgIcon from "@mui/material/SvgIcon";
import Image from "next/image";
import closeIcon from "../../../../public/assets/shared/mobile/icon-close.svg";
import logoDark from "../../../../public/assets/shared/desktop/logo-dark.png";
import { NAVITEMS } from "../../../../lib/utils/constants";
import { styles, DrawerHeader } from "./styles";
import { useRouter } from "next/router";

const HeaderDrawer = ({
  handleDrawerToggle,
  mobileOpen,
}: {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
}) => {
  const router = useRouter();

  return (
    <Box component="nav" onClick={handleDrawerToggle} sx={styles}>
      <Drawer
        anchor="top"
        variant="persistent"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <DrawerHeader>
          <Toolbar>
            <Image src={logoDark} alt="Designo" width={194} height={26} />
            <SvgIcon component={closeIcon} inheritViewBox />
          </Toolbar>
        </DrawerHeader>

        <List>
          {NAVITEMS.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton onClick={() => router.push(item.path)}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default HeaderDrawer;
