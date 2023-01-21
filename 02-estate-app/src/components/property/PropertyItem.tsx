import { Box, Typography } from "@mui/material";
import PropertyItemListInfo from "./info/PropertyItemListInfo";

type Props = {
  img: string;
  price: number;
  address: string;
  bedrooms: number;
  bathrooms: number;
  space: number;
};

function PropertyItem({
  img,
  price,
  address,
  bedrooms,
  bathrooms,
  space,
}: Props) {
  return (
    <Box bgcolor="#fff" borderRadius="10px" maxWidth="350px">
      <img
        src={img}
        alt="housePhoto"
        style={{ display: "block", maxWidth: "100%" }}
      />
      <Box p={2}>
        <Typography variant="body2" sx={{ fontWeight: "fontWeightBold" }}>
          ${price}
        </Typography>
        <Typography variant="body2" sx={{ my: 2 }}>
          {address}
        </Typography>
        <PropertyItemListInfo
          bedrooms={bedrooms}
          bathrooms={bathrooms}
          space={space}
        />
      </Box>
    </Box>
  );
}

export default PropertyItem;
