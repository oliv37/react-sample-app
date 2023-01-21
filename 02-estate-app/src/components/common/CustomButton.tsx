import { Button, styled } from "@mui/material";

type Props = {
  backgroundColor: string;
  textColor: string;
  heroBtn?: boolean;
  guideBtn?: boolean;
  getStartedBtn?: boolean;
};

function shouldForwardProp(prop: string) {
  return (
    prop !== "backgroundColor" &&
    prop !== "textColor" &&
    prop !== "heroBtn" &&
    prop !== "guideBtn" &&
    prop !== "getStartedBtn"
  );
}

const CustomButton = styled(Button, {
  shouldForwardProp: shouldForwardProp,
})<Props>(
  ({
    theme,
    backgroundColor,
    textColor,
    heroBtn,
    guideBtn,
    getStartedBtn,
  }) => ({
    backgroundColor: backgroundColor,
    color: textColor,
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "7px",
    textTransform: "none",
    display: "block",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: textColor,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down("md")]: {
      margin: (heroBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (heroBtn || getStartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%",
    },
  })
);

export default CustomButton;
