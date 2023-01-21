import { Box } from "@mui/material";
import PropertyItemInfo from "./PropertyItemInfo";
import bedroomsIcon from "../../../assets/bedroomsIcon.png";
import bathroomsIcon from "../../../assets/bathroomsIcon.png";
import spaceIcon from "../../../assets/spaceIcon.png";

type Props = {
  bedrooms: number;
  bathrooms: number;
  space: number;
};

function PropertyItemListInfo({ bedrooms, bathrooms, space }: Props) {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <PropertyItemInfo
        icon={bedroomsIcon}
        iconAlt="bedroomsIcon"
        nb={bedrooms}
      />
      <PropertyItemInfo
        icon={bathroomsIcon}
        iconAlt="bathroomsIcon"
        nb={bathrooms}
      />
      <PropertyItemInfo icon={spaceIcon} iconAlt="spaceIcon" nb={space} />
    </Box>
  );
}

export default PropertyItemListInfo;
