import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, styled, Typography } from "@mui/material";

type Props = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  subTitle: string;
};

const GuideBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(2, 0, 2, 0),
  },
}));

function GuideItem({ imgSrc, imgAlt, title, subTitle }: Props) {
  return (
    <GuideBox>
      <img src={imgSrc} alt={imgAlt} />
      <Typography
        variant="body2"
        sx={{
          fontWeight: "fontWeightMedium",
          fontSize: "1.2rem",
          color: "#3B3c45",
          my: 1,
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: "fontWeightBold",
            fontSize: "1rem",
            color: "#0689FF",
          }}
        >
          {subTitle}
        </Typography>
        <ArrowRightAltIcon style={{ color: "#0689FF" }} />
      </Box>
    </GuideBox>
  );
}

export default GuideItem;
