import Contacts from "../components/Contacts";
import { LongText, TitleText } from "../utils/utils";
import aquiButton from "../assets/aquiButton.svg";
import CardScroller from "../components/CardScroller/CardScroller";

const Home = ({}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ margin: "0 15rem" }}>
        <TitleText variant="h1">TORNA-TE NOTÁVEL</TitleText>
        <LongText
          align="justify"
          variant="h5"
          margin="1rem"
          marginBottom="3rem"
        >
          Aqui viverá a descrição da empresa. Os nossos projetos, marcas,
          parcerias, etc... Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </LongText>
      </div>
      <CardScroller />
      <div
        style={{
          backgroundColor: "white",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TitleText variant="h2" margin="2rem" style={{ color: "black" }}>
          Entre em contacto:
        </TitleText>
        <a href="https://instagram.com/remarkable.mkt" target="_blank">
          <img src={aquiButton} className="aqui remarkable" alt="Aqui Button" />
        </a>
      </div>
      <Contacts />
    </div>
  );
};

Home.proptypes = {};

export default Home;
