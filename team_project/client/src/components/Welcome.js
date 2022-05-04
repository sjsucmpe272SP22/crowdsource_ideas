import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import OutlinedCard from "./OutlinedCard";

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

function Welcome() {
  const navigate = useNavigate();
  const handleOpen = () => {
    navigate("/signin");
  };

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "absolute",
    top: 600,
    right: 750,
    height: 200,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));

  return (
    <div
      style={{
        backgroundImage: "url(https://wallpaperaccess.com/full/2811932.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
        onClick={handleOpen}
      >
        <ImageButton
          focusRipple
          key="GET STARTED"
          style={{
            width: "200px",
          }}
        >
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              GET STARTED
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      </Box>
      <span
        style={{
          color: "white",
          fontSize: "xxx-large",
          paddingRight: "800px",
          fontFamily: "fantasy",
          position: "relative",
          top: "120px",
        }}
      >
        {" "}
        An interactive, online community{" "}
      </span>{" "}
      <br />
      <span
        style={{
          color: "white",
          fontSize: "xxx-large",
          paddingRight: "800px",
          fontFamily: "fantasy",
          position: "relative",
          top: "120px",
        }}
      >
        {" "}
        for crowdsourcing ideas{" "}
      </span>
    </div>
  );
}

export default Welcome;
