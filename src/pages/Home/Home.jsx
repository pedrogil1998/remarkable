import Contacts from "../../components/Contacts/Contacts";
import useIsMobile, {
  LongText,
  SpanKdam,
  SubLongText,
  SubTitleText,
  TitleText,
} from "../../utils/utils";
import CardScroller from "../../components/FeedbackScroller/CardScroller";
import video from "../../assets/video-1.mp4";
import "./Home.css";
import EaseAppearMotion from "../../components/Animations/AppearAnimation";
import maLogo from "../../assets/maLogo.svg";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import PartnerModal from "../../components/Partner/Modal/PartnerModal";
import { useState } from "react";

const PartnerRemarkable = {
  id: 1,
  title: "Remarkable",
  description: "Mudo seu futuro, junte-se a nós.",
  type: "Marketing",
  image: maLogo,
  to_email: "pedrogilmoura27@gmail.com",
  services: ["Marketing"],
};

const Home = ({}) => {
  const isMobile = useIsMobile();
  const scrollHover = () => {
    let scroll = document.querySelector(".home-container");

    scroll.scrollIntoView();
  };

  //MODAL
  const [open, setOpen] = useState({ item: PartnerRemarkable, open: false });
  const handleOpen = () => setOpen({ ...open, open: true });
  const handleClose = () => setOpen({ ...open, open: false });

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
          <button type="submit" className="submit-button">
            <SpanKdam onClick={handleOpen}>
              Aqui&nbsp;
              <AdsClickIcon />
            </SpanKdam>
            <PartnerModal
              open={open.open}
              item={open.item}
              handleClose={handleClose}
            ></PartnerModal>
          </button>
        </div>
        <Contacts />
        {!isMobile && <video src={video} autoPlay loop muted></video>}
      </div>
    </>
  );
};

Home.proptypes = {};

export default Home;
