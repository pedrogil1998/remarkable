import Contacts from "../../components/Contacts/Contacts";
import DragScroller from "../../components/PortfolioScroller/DragScroller";
import { SubLongText, TitleText } from "../../utils/utils";
import engenharia from "../../assets/Portfolio/engenharia.svg";
import financeiro from "../../assets/Portfolio/financeiro.svg";
import fitness from "../../assets/Portfolio/fitness.svg";
import imobiliario from "../../assets/Portfolio/imobiliario.svg";
import retalho from "../../assets/Portfolio/retalho.svg";
import saude from "../../assets/Portfolio/saude.svg";
import "./Portfolio.css";
import EaseAppearMotion from "../../components/Animations/AppearAnimation";
import LightBackground from "../../components/Animations/LightBackground/LightBackground";
import outros from "../../assets/Portfolio/outros.svg";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <LightBackground zIndex={-1} />
      <div className="upper-container">
        <TitleText variant="h1">SÊ O PRÓXIMO</TitleText>
      </div>
      <SubLongText className="long-text" variant="h7">
        {"Alguns dos nossos trabalhos em redes sociais e identidade visual"}
      </SubLongText>
      {/* <DragScroller title="FINANCEIRO" icon={financeiro}/> */}
      <EaseAppearMotion>
        <DragScroller title="FITNESS" icon={fitness} />
        <DragScroller title="IMOBILIÁRIO" icon={imobiliario} />
        <DragScroller title="RETALHO" icon={retalho} />
        <DragScroller title="SAÚDE" icon={saude} />
        <DragScroller title="ENGENHARIA" icon={engenharia} />
        <DragScroller title="OUTROS PROJETOS" icon={outros} />
      </EaseAppearMotion>
      <Contacts />
    </div>
  );
};
Portfolio.proptypes = {};
export default Portfolio;
