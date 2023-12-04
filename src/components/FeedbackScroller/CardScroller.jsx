import { Box } from "@mui/material";
import { TitleText } from "../../utils/utils";
import { remarkableRed } from "../../utils/colors";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import FeedbackCard from "./FeedbackCard/FeedbackCard";
import data from "./FeedbackCard/FeedbackInfo.json";
import "./CardScroller.css";
import { motion } from "framer-motion";

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

  return (
    <div className="card-scroller-container">
      <TitleText variant="h1" margin="1rem">
        Feedback
      </TitleText>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>
    </div>
  );
};

CardScroller.proptypes = {};

export default CardScroller;
