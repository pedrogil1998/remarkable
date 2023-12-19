import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";

export const LongText = styled(Typography)((props) => ({
  fontFamily: "Arimo",
  marginTop: "2rem",
}));

export const SubLongText = styled(Typography)((props) => ({
  fontFamily: "Arimo",
}));

export const TitleText = styled(Typography)((props) => ({
  fontFamily: "Kdam-Regular",
  fontSize: "3rem",
  marginBottom: "2rem",
}));

export const SubTitleText = styled(Typography)((props) => ({
  fontFamily: "Kdam-Regular",
}));

export const CardTitleText = styled(Typography)((props) => ({
  fontFamily: "Arimo-Bold",
}));

export const CardText = styled(Typography)((props) => ({
  fontFamily: "Arimo",
}));

export const NavText = styled(Typography)((props) => ({
  fontFamily: "Arimo",
  "&:hover": {
    textDecoration: "underline",
    textUnderlineOffset: "4px"
  },
}));

export const ServiceCardText = styled(Typography)((props) => ({
  fontFamily: "Arimo",
  lineHeight: 1.3,
}));

export default function useIsMobile() {
  const getIsMobile = () => window.innerWidth <= 960;
  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return isMobile;
}
