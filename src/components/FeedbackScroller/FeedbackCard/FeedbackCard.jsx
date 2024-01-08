import PropTypes from "prop-types";
import { Box, Button, Card, CardContent } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import aspas from "../../../assets/aspas.svg";
import { remarkableRed } from "../../../utils/colors";
import useIsMobile, { CardText, CardTitleText } from "../../../utils/utils";
import "./FeedbackCard.css";
import { useState } from "react";

const FeedbackCard = ({
  name,
  subtitle = "",
  description,
  stars = 0,
  id,
  expanded,
  setExpanded,
}) => {
  const [localExpanded, setLocalExpanded] = useState(false);
  let text = (!expanded && !localExpanded) ? description.substring(0, 218) + "..." : description;
  const isMobile = useIsMobile();

  const expandFunc = () => {
    isMobile ? setExpanded(!expanded) : setLocalExpanded(!localExpanded);
  };
  return (
    <Card id={id} className="feedbackCard" sx={{ borderRadius: "10px" }}>
      <CardContent className="feedbackCardContent">
        <Box className="feedbackCardBox">
          <CardTitleText className="card-title-text" align="left" variant="h4">
            {name}
            <img src={aspas} className="aspas" alt="Card aspas" />
          </CardTitleText>
          <CardText
            className="card-text"
            align="left"
            variant="h6"
            color="text.secondary"
          >
            {subtitle}
          </CardText>
          <Box>
            {[...Array(stars)].map((_, index) => {
              return (
                <StarRoundedIcon key={index} style={{ color: remarkableRed }} />
              );
            })}
          </Box>
        </Box>
        <CardText
          className="card-text-description"
          variant="h7"
          align="justify"
          color="text.secondary"
        >
          {text}
        </CardText>
        <div className="read-more-div">
          <Button variant="outlined" color="error" onClick={expandFunc}>
            {(!expanded && !localExpanded) ? "Ler Mais" : "Ler Menos"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

FeedbackCard.propTypes = {
  name: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  stars: PropTypes.number,
  id: PropTypes.number,
  expanded: PropTypes.bool,
  setExpanded: PropTypes.func,
};

export default FeedbackCard;
