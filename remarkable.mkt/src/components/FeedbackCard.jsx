import PropTypes from "prop-types";
import { Box, Card, CardContent, Typography } from "@mui/material";
import aspas from "../assets/aspas.svg";
import { styled } from "@mui/material/styles";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { remarkableRed } from "../utils/colors";

const TitleText = styled(Typography)((props) => ({
  fontFamily: "Arimo-Bold",
}));

const Text = styled(Typography)((props) => ({
  fontFamily: "Arimo",
}));

const FeedbackCard = ({
  name,
  subtitle = "",
  description,
  last,
  stars = 0,
}) => {
  return (
    <Card
      className="feedbackCard"
      sx={{
        borderRadius: 10,
        minWidth: 500,
        maxWidth: 500,
        mr: !last && 2,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          margin: "1rem",
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
          sx={{ mb: 1.5 }}
        >
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <TitleText align="left" variant="h4">
              {name}
            </TitleText>
            <Text align="left" variant="h6" color="text.secondary">
              {subtitle}
            </Text>
            <Box>
              {[...Array(stars)].map((_, index) => {
                return <StarRoundedIcon key={index} style={{ color: remarkableRed }} />;
              })}
            </Box>
          </Box>
          <Box>
            <img src={aspas} className="aspas" alt="Card aspas" />
          </Box>
        </Box>

        <Text variant="h7" align="left" color="text.secondary">
          {description}
        </Text>
      </CardContent>
    </Card>
  );
};

FeedbackCard.proptypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default FeedbackCard;
