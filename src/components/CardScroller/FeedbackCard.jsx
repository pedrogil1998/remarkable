import PropTypes from "prop-types";
import { Box, Card, CardContent } from "@mui/material";
import aspas from "../../assets/aspas.svg";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { remarkableRed } from "../../utils/colors";
import { CardText, CardTitleText } from "../../utils/utils";
import styles from "./CardScroller.module.scss";

const FeedbackCard = ({ name, subtitle = "", description, stars = 0 }) => {
  return (
    <Card className={styles.feedbackCard}>
      <CardContent className={styles.feedbackCardContent}>
        <Box className={styles.feedbackCardBox}>
          <Box className={styles.feedbackCardBoxHeader}>
            <CardTitleText align="left" variant="h4">
              {name}
            </CardTitleText>
            <CardText align="left" variant="h6" color="text.secondary">
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
          <Box>
            <img src={aspas} className={styles.aspas} alt="Card aspas" />
          </Box>
        </Box>
        <CardText variant="h7" align="left" color="text.secondary">
          {description}
        </CardText>
      </CardContent>
    </Card>
  );
};

FeedbackCard.proptypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default FeedbackCard;
