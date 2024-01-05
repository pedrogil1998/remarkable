import { Box } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import FeedbackCard from "./FeedbackCard/FeedbackCard";
import data from "./FeedbackCard/FeedbackInfo.json";
import "./CardScroller.css";
import EaseAppearMotion from "../Animations/AppearAnimation";
import useIsMobile from "../../utils/utils";
import { useState } from "react";

const CardScroller = () => {
  const [selected, setSelected] = useState(0);
  const maxValue = 3;
  const minValue = 0;
  const isMobile = useIsMobile();

  const scrollRight = () => {
    const newValue = selected + 1;
    const cardName = isMobile ? "card-" + newValue : "card-3";
    selected < maxValue && setSelected(isMobile ? newValue : 3);

    let scroll = document.getElementById(cardName);
    scroll.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };
  const scrollLeft = () => {
    const newValue = selected - 1;
    const cardName = isMobile ? "card-" + newValue : "card-0";
    selected > minValue && setSelected(isMobile ? newValue : 0);

    let scroll = document.getElementById(cardName);
    scroll.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div className="card-scroller-container">
      <EaseAppearMotion>
        <Box className="box-scroller">
          <div>
            <button
              onClick={scrollLeft}
              className="arrow"
            >
              <KeyboardDoubleArrowLeftIcon fontSize="large" />
            </button>
          </div>
          <Box className="card-scroller">
            {data?.feedback.map((obj, index) => {
              return (
                <FeedbackCard
                  id={"card-" + index}
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
            <button onClick={scrollRight}  className="arrow">
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
