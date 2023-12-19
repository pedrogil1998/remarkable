import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import './ScrollTop.css';

export const ScrollTop = ({}) => {
  return (
    <a href="#top" className="scroll-to-top">
      <KeyboardArrowUpIcon />
    </a>
  );
};
ScrollTop.proptypes = {};

export default ScrollTop;
