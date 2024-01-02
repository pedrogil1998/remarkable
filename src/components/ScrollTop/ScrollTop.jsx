import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./ScrollTop.css";
import { useEffect, useState } from "react";

export const ScrollTop = ({}) => {
  
  //Just to update window.scroll - might need improvement
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
  }, []);

  return (
    <a
      href="#top"
      className="scroll-to-top"
      style={window.scrollY != 0 ? { display: "flex" } : { display: "none" }}
    >
      <KeyboardArrowUpIcon />
    </a>
  );
};
ScrollTop.proptypes = {};

export default ScrollTop;
