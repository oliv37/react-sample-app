import { Container, styled } from "@mui/material";

import GuideButton from "./GuideButton";
import GuideDescription from "./GuideDescription";
import GuideDivider from "./GuideDivider";
import GuideListItem from "./GuideListItem";
import GuideTitle from "./GuideTitle";

const GuideContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

function Guide() {
  return (
    <GuideContainer>
      <GuideDivider />
      <GuideTitle />
      <GuideDescription />
      <GuideListItem />
      <GuideButton />
    </GuideContainer>
  );
}

export default Guide;
