import Contacts from "../../components/Contacts/Contacts";
import useIsMobile, { LongText, TitleText } from "../../utils/utils";
import aquiButton from "../../assets/aquiButton.svg";
import CardScroller from "../../components/FeedbackScroller/CardScroller";
import "./Home.css";

const Home = ({}) => {
  const isMobile = useIsMobile();
  return (
    <>
      <div className="home-container">
        <div className="upper-container">
          <TitleText variant="h1">TORNA-TE NOTÁVEL</TitleText>

          <LongText className="long-text" variant="h5">
            {
              "A verdadeira MUDANÇA começa aqui... Agarra a oportunidade de tornar o teu negócio NOTÁVEL. Somos uma agência de Marketing, apaixonada pelo Marketing, temos a ânsia de ser diferentes e tornar o seu negócio diferente. Preparado para se tornar reMArkable?"
            }
          </LongText>
        </div>
        <CardScroller />
        <div className="contact-us">
          <TitleText variant="h2" margin="2rem" style={{ color: "black" }}>
            Entre em contacto:
          </TitleText>
          <a href="https://instagram.com/remarkable.mkt" target="_blank">
            <img
              src={aquiButton}
              className="aqui remarkable"
              alt="Aqui Button"
            />
          </a>
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
