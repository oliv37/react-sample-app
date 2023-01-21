import { Box, Typography } from "@mui/material";

type Props = {
  icon: string;
  iconAlt: string;
  nb: number;
};

function PropertyItemInfo({ icon, iconAlt, nb }: Props) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
      <img src={icon} alt={iconAlt} />
      <Typography variant="body2">{nb}</Typography>
    </Box>
  );
}

export default PropertyItemInfo;
