import { Box } from "@mui/material";
import properties from "./data";
import PropertyItem from "./PropertyItem";

function PropertyListItem() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={5}
      gap={5}
      sx={{
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      {properties.map((property) => (
        <PropertyItem
          key={property.id}
          img={property.img}
          price={property.price}
          address={property.address}
          bedrooms={property.bedrooms}
          bathrooms={property.bathrooms}
          space={property.space}
        />
      ))}
    </Box>
  );
}

export default PropertyListItem;
