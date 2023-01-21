import { Box, styled } from "@mui/material";
import buyIcon from "../../assets/buy_icon.png";
import rentIcon from "../../assets/rent_icon.png";
import sellIcon from "../../assets/sell_icon.png";
import GuideItem from "./GuideItem";

const GuideListeItemBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  width: "70%",
  margin: theme.spacing(5, 0, 5, 0),
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "0",
    flexDirection: "column",
  },
}));

function GuideListItem() {
  return (
    <GuideListeItemBox>
      <GuideItem
        imgSrc={buyIcon}
        imgAlt="buyIcon"
        title="Buying Guides"
        subTitle="How to buy"
      />
      <GuideItem
        imgSrc={rentIcon}
        imgAlt="rentIcon"
        title="Renting Guides"
        subTitle="How to rent"
      />
      <GuideItem
        imgSrc={sellIcon}
        imgAlt="buyIcon"
        title="Selling Guides"
        subTitle="How to sell"
      />
    </GuideListeItemBox>
  );
}

export default GuideListItem;
