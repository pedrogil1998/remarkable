import Contacts from "../../components/Contacts/Contacts";
import useIsMobile, { LongText, TitleText } from "../../utils/utils";
import aquiButton from "../../assets/aquiButton.svg";
import CardScroller from "../../components/FeedbackScroller/CardScroller";
import "./Home.css";
import { motion } from "framer-motion";

const Home = ({}) => {
  const isMobile = useIsMobile();
  return (
    <>
      <div className="home-container">
        <div className="upper-container">
          <TitleText variant="h1">TORNA-TE NOTÁVEL</TitleText>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <LongText className="long-text" variant="h5">
              {
                "A verdadeira MUDANÇA começa aqui... Agarra a oportunidade de tornar o teu negócio um negócio NOTÁVEL. Não somos apenas uma agência de Marketing. Temos a paixão pelo Marketing, a ânsia de inovar, marcar a diferença e tornar o seu negócio diferente. Preparado para se tornar reMArkable?"
              }
            </LongText>
          </motion.div>
        </div>
        <CardScroller />
        <div className="contact-us">
          <TitleText variant="h2" margin="2rem" style={{ color: "black" }}>
            Entre em contacto:
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
        {!isMobile && (
          <video src="/videos/video-1.mp4" autoPlay loop muted></video>
        )}
      </div>
    </>
  );
};

Home.proptypes = {};

export default Home;
