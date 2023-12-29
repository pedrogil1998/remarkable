import { Box } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import FeedbackCard from "./FeedbackCard/FeedbackCard";
import data from "./FeedbackCard/FeedbackInfo.json";
import "./CardScroller.css";
import EaseAppearMotion from "../Animations/AppearAnimation";

const CardScroller = () => {
  const scrollCard = (e, right = false) => {
    e.preventDefault();
    let scroll = document.querySelector(".card-scroller");
    scroll.scrollBy({
      top: 0,
      left: right ? 305 : -305,
      behavior: "smooth",
    });
  };

  const scrollHover = () => {
    let scroll = document.querySelector(".home-container");
    scroll.scrollIntoView();
  };

  return (
    <div className="card-scroller-container">
      <EaseAppearMotion>
        <Box className="box-scroller">
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
      </EaseAppearMotion>
    </div>
  );
};

CardScroller.proptypes = {};

export default CardScroller;
