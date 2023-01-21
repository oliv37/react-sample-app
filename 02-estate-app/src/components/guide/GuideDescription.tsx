import { Box, Typography } from "@mui/material";

function GuideDescription() {
  return (
    <Box sx={{ width: { xs: "85%", md: "30%" } }}>
      <Typography
        variant="body2"
        sx={{
          fontSize: "1rem",
          fontWeight: "500",
          color: "#5A6473",
          textAlign: "center",
        }}
      >
        Everything you need to know when you want to buy, rent or sell - All in
        one place
      </Typography>
    </Box>
  );
}

export default GuideDescription;
