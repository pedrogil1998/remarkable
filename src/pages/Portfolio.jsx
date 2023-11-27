import Contacts from "../components/Contacts/Contacts";
import DragScroller from "../components/DragScroller/DragScroller";
import { TitleText } from "../utils/utils";
import engenharia from "../assets/engenharia.svg";
import financeiro from "../assets/financeiro.svg";
import fitness from "../assets/fitness.svg";
import imobiliario from "../assets/imobiliario.svg";
import retalho from "../assets/retalho.svg";
import saude from "../assets/saude.svg";

const Portfolio = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ margin: "0 15rem" }}>
        <TitleText variant="h1">SÊ O PRÓXIMO</TitleText>
      </div>

      {/* <DragScroller title="FINANCEIRO" icon={financeiro}/> */}
      <DragScroller title="FITNESS" icon={fitness} />
      <DragScroller title="IMOBILIÁRIO" icon={imobiliario} />
      <DragScroller title="RETALHO" icon={retalho} />
      <DragScroller title="SAÚDE" icon={saude} />
      <DragScroller title="ENGENHARIA" icon={engenharia} />
      <Contacts />
    </div>
  );
};
Portfolio.proptypes = {};
export default Portfolio;
