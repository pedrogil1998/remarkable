import { Button, ToggleButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { remarkableGray, remarkableRed } from "../../utils/colors";

export const PartnerButton = styled(ToggleButton)((props) => ({
  width: "150px",
  borderRadius: "4px",
  borderTop: "1px solid black",
  backgroundColor: remarkableGray,
  color: "white",
  textAlign: "center",
  textTransform: "none",

  "&.Mui-selected": {
    backgroundColor: "gray",
    color: "white"
  },
  "&&:hover": {
    backgroundColor: "DimGray"
  }
}));
