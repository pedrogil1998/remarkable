import PropTypes from "prop-types";
import { Box, Card, CardContent } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import aspas from "../../../assets/aspas.svg";
import { remarkableRed } from "../../../utils/colors";
import { CardText, CardTitleText } from "../../../utils/utils";
import "./FeedbackCard.css";

const FeedbackCard = ({ name, subtitle = "", description, stars = 0, id }) => {
  return (
    <Card id={id} className="feedbackCard" sx={{ borderRadius: "10px" }}>
      <CardContent className="feedbackCardContent">
        <Box className="feedbackCardBox">
            <CardTitleText
              className="card-title-text"
              align="left"
              variant="h4"
            >
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
                  <StarRoundedIcon
                    key={index}
                    style={{ color: remarkableRed }}
                  />
                );
              })}
            </Box>
        </Box>
        <CardText className="card-text-description" variant="h7" align="left" color="text.secondary">
          {description}
        </CardText>
      </CardContent>
    </Card>
  );
};

FeedbackCard.proptypes = {
  name: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  stars: PropTypes.number,
};

export default FeedbackCard;
