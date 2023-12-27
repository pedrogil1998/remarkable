import Contacts from "../../components/Contacts/Contacts";
import useIsMobile, {
  LongText,
  SubLongText,
  TitleText,
} from "../../utils/utils";
import aquiButton from "../../assets/aquiButton.svg";
import CardScroller from "../../components/FeedbackScroller/CardScroller";
import video from "../../assets/video-1.mp4";
import "./Home.css";
import { motion } from "framer-motion";
import EaseAppearMotion from "../../components/Animations/AppearAnimation";
import maLogo from "../../assets/maLogo.svg";
import HeartAnimation, {
  RotateAnimation,
} from "../../components/Animations/RotateAnimation";

const Home = ({}) => {
  const isMobile = useIsMobile();
  const scrollHover = () => {
    let scroll = document.querySelector(".home-container");

    scroll.scrollIntoView();
  };
  return (
    <>
      <div className="home-container">
        <div className="upper-container">
          <TitleText variant="h1">TORNE-SE NOTÁVEL</TitleText>
          <EaseAppearMotion>
            <SubLongText className="long-text" variant="h7">
              {
                "A verdadeira MUDANÇA começa aqui. Agarre a oportunidade de tornar o seu negócio num negócio NOTÁVEL. Não somos apenas uma agência de Marketing. Temos a paixão pelo Marketing, a ânsia de inovar, marcar a diferença e tornar o seu negócio diferente."
              }
            </SubLongText>
            <LongText variant="h5">
              {"Preparado para se tornar reMArkable?"}
            </LongText>
          </EaseAppearMotion>
          <a onMouseEnter={scrollHover} href="#here">
            <img
              src={maLogo}
              className="logoHome remarkable"
              alt="Remarkable logoContact"
            />
          </a>
        </div>
        <CardScroller />
        <div id="here" className="contact-us">
          <TitleText variant="h2" margin="2rem" style={{ color: "white" }}>
            Mude o futuro do seu negócio:
          </TitleText>
          <a href="https://instagram.com/remarkable.mkt" target="_blank">
            <button type="submit" className="submit-button">
              <span>Aqui</span>
            </button>
          </a>
        </div>
        <Contacts />
        {!isMobile && <video src={video} autoPlay loop muted></video>}
      </div>
    </>
  );
};

Home.proptypes = {};

export default Home;
