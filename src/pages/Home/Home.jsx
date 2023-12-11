import Contacts from "../../components/Contacts/Contacts";
import useIsMobile, { LongText, TitleText } from "../../utils/utils";
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
    // let scroll = document.querySelector(".logoHome");

    // scroll.addEventListener("mouseenter", function () {
    //   scroll.scrollIntoView({ alignToTop: false });
    // });

    var element = document.querySelector(".logoHome");
    var headerOffset = 128;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition / 2,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="home-container">
        <div className="upper-container">
          <TitleText variant="h1">TORNA-TE NOTÁVEL</TitleText>

          <EaseAppearMotion>
            <LongText className="long-text" variant="h5">
              {
                "A verdadeira MUDANÇA começa aqui. Agarra a oportunidade de tornar o teu negócio um negócio NOTÁVEL. Não somos apenas uma agência de Marketing. Temos a paixão pelo Marketing, a ânsia de inovar, marcar a diferença e tornar o seu negócio diferente."
              }
            </LongText>
            <LongText className="long-text" variant="h5">
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
          <TitleText variant="h2" margin="2rem" style={{ color: "black" }}>
            Muda o teu futuro:
          </TitleText>
          <motion.div whileHover={{ scale: 1.1 }}>
            <a href="https://instagram.com/remarkable.mkt" target="_blank">
              <img
                src={aquiButton}
                className="aqui remarkable"
                alt="Aqui Button"
              />
            </a>
          </motion.div>
        </div>
        <Contacts />
        {!isMobile && <video src={video} autoPlay loop muted></video>}
      </div>
    </>
  );
};

Home.proptypes = {};

export default Home;
