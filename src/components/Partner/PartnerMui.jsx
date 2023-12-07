import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { remarkableRed } from "../../utils/colors";

export const PartnerButton = styled(Button)((props) => ({
  width: "fit-content",
  borderRadius: "5px",
  backgroundColor: remarkableRed,
  marginRight: "1rem",
  color: "white",
  textTransform: "none",
  textAlign: "center",
}));
