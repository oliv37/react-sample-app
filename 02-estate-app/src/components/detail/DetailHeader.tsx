import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DetailDivider from "./DetailDivider";
import houseCard from "../../assets/houseCard.png";

const DetailHeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(10),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const PrimaryTypography = styled(Box)(({ theme }) => ({
  fontSize: "2.1rem",
  color: "#000339",
  fontWeight: "700",
  margin: theme.spacing(3, 0, 3, 0),
}));

const SecondaryTypography = styled(Box)({
  fontSize: "1rem",
  color: "#5A6473",
  lineHeight: "1.7",
});

function DetailHeader() {
  return (
    <DetailHeaderBox>
      <Box flex={1} display="flex" flexDirection="column" alignItems="center">
        <img src={houseCard} alt="house" style={{ maxWidth: "100%" }} />
      </Box>
      <Box flex={1}>
        <DetailDivider />
        <PrimaryTypography>
          You’ve found a neighborhood you love.
        </PrimaryTypography>
        <SecondaryTypography>
          When you own a home, you commit to living in one location for a period
          of time. We are here to ensure that this will be a memorable
          experience for you.
        </SecondaryTypography>
      </Box>
    </DetailHeaderBox>
  );
}

export default DetailHeader;
