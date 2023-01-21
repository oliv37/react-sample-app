import { Box, styled, Typography } from "@mui/material";

const PrimaryTypography = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontWeight: "700",
  fontSize: "32px",
  [theme.breakpoints.up("md")]: {
    fontSize: "64px",
  },
}));

const SecondaryTypography = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: "#7B8087",
  fontWeight: "500",
  [theme.breakpoints.up("md")]: {
    fontSize: "18px",
  },
}));

type Props = {
  primaryText: string;
  secondaryText: string;
};

function DetailItem({ primaryText, secondaryText }: Props) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <PrimaryTypography>{primaryText}</PrimaryTypography>
      <SecondaryTypography>{secondaryText}</SecondaryTypography>
    </Box>
  );
}

export default DetailItem;
