import { Box } from "@mui/material";
import { TitleText } from "../../utils/utils";
import { remarkableRed } from "../../utils/colors";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import FeedbackCard from "./FeedbackCard/FeedbackCard";
import data from "./FeedbackCard/FeedbackInfo.json";

const CardScroller = () => {
  const scrollCard = (e, right = false) => {
    e.preventDefault();
    let scroll = document.querySelector(".card-scroller");
    scroll.scrollBy({
      top: 0,
      left: right ? 350 : -350,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ backgroundColor: remarkableRed, paddingBottom: "2rem" }}>
      <TitleText variant="h1" margin="1rem">
        Feedback
      </TitleText>
      <Box margin="0 6rem" display="inline-flex" alignItems="center">
        <div>
          <button onClick={scrollCard} className="arrow">
            <KeyboardDoubleArrowLeftIcon fontSize="large" />
          </button>
        </div>
        <Box className="card-scroller">
          {data?.feedback.map((obj, index) => {
            return (
              <FeedbackCard
                key={index}
                name={obj.name}
                subtitle={obj.subtitle}
                description={obj.description}
                stars={obj.stars}
              />
            );
          })}
        </Box>
        <div>
          <button onClick={(e) => scrollCard(e, true)} className="arrow">
            <KeyboardDoubleArrowRightIcon fontSize="large" />
          </button>
        </div>
      </Box>
    </div>
  );
};

CardScroller.proptypes = {};

export default CardScroller;
