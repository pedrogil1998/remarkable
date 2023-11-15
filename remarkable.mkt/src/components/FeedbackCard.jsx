import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@mui/material";

const FeedbackCard = ({ name, description, last}) => {
  return (
    <Card sx={{ minWidth: 150, maxWidth: 300, display: "flex", mr: !last && 2 }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} variant="h4">
          {name}
        </Typography>
        <Typography color="text.secondary">{description}</Typography>
      </CardContent>
    </Card>
  );
};

FeedbackCard.proptypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default FeedbackCard;
