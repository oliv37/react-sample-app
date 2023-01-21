import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
} from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type MuiIcon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
};

const menus: [string, MuiIcon][] = [
  ["Home", HomeIcon],
  ["Features", FeaturedPlayListIcon],
  ["Services", MiscellaneousServicesIcon],
  ["Listed", ListAltIcon],
  ["Contact", ContactsIcon],
];

type Props = {
  toggleDrawer: (event: any) => void;
};

export default function MobileMenu({ toggleDrawer }: Props) {
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {menus.map(([text, Icon]) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon sx={{ color: "#0F1B4C" }} />
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{
                  "& .MuiListItemText-primary": {
                    color: "#0F1B4C",
                    fontWeight: "500",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
