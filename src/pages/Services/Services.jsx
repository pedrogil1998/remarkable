import { Box } from "@mui/material";
import PropTypes from "prop-types";
import marketingdigital from "../../assets/marketingdigital.svg";
import gestaofrotas from "../../assets/gestaofrotas.svg";
import branding from "../../assets/branding.svg";
import gestaoredesociais from "../../assets/gestaoredesociais.svg";
import planosmarketing from "../../assets/planosmarketing.svg";
import plano360 from "../../assets/plano360.svg";
import siteseweb from "../../assets/siteseweb.svg";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import Contacts from "../../components/Contacts/Contacts";
import { TitleText } from "../../utils/utils";
import "./Services.css";
import EaseAppearMotion from "../../components/Animations/AppearAnimation";

const Services = () => {
  return (
    <div className="service-container">
      <div className="service-content">
        <TitleText variant="h2">O TEU FUTURO COMEÇA AQUI</TitleText>
        <EaseAppearMotion>
          <Box className="service-line-box">
            <ServiceCard
              name={"Marketing Digital"}
              icon={marketingdigital}
              description={
                "A reMArkable foi um passo importantíssimo para impulsionar o meu negócio. O Marco é muito competente e estou bastante satisfeito com toda a dedicação e vontade demonstrada em querer ajudar-me. Os negócios crescem com pessoas assim!"
              }
            />
            <ServiceCard
              name={"Gestão de Frotas"}
              icon={gestaofrotas}
              description={
                "A reMArkable foi um passo importantíssimo para impulsionar o meu negócio. O Marco é muito competente e estou bastante satisfeito com toda a dedicação e vontade demonstrada em querer ajudar-me. Os negócios crescem com pessoas assim!"
              }
            />
            <ServiceCard
              name={"Branding"}
              icon={branding}
              description={
                "A reMArkable foi um passo importantíssimo para impulsionar o meu negócio. O Marco é muito competente e estou bastante satisfeito com toda a dedicação e vontade demonstrada em querer ajudar-me. Os negócios crescem com pessoas assim!"
              }
              last
            />
          </Box>
          <Box className="service-line-box">
            <ServiceCard
              name={"Gestao de Redes Sociais"}
              icon={gestaoredesociais}
              description={
                "A reMArkable foi um passo importantíssimo para impulsionar o meu negócio. O Marco é muito competente e estou bastante satisfeito com toda a dedicação e vontade demonstrada em querer ajudar-me. Os negócios crescem com pessoas assim!"
              }
            />
            <ServiceCard
              name={"Planos de Marketing e Comunicação"}
              icon={planosmarketing}
              description={
                "A reMArkable foi um passo importantíssimo para impulsionar o meu negócio. O Marco é muito competente e estou bastante satisfeito com toda a dedicação e vontade demonstrada em querer ajudar-me. Os negócios crescem com pessoas assim!"
              }
            />
            <ServiceCard
              name={"Sites e Aplicações Web"}
              icon={siteseweb}
              description={
                "A reMArkable foi um passo importantíssimo para impulsionar o meu negócio. O Marco é muito competente e estou bastante satisfeito com toda a dedicação e vontade demonstrada em querer ajudar-me. Os negócios crescem com pessoas assim!"
              }
              last
            />
          </Box>
          <Box className="service-line-box">
            <ServiceCard
              wide
              name={"Planos 360"}
              icon={plano360}
              description={
                "A reMArkable foi um passo importantíssimo para impulsionar o meu negócio. O Marco é muito competente e estou bastante satisfeito com toda a dedicação e vontade demonstrada em querer ajudar-me. Os negócios crescem com pessoas assim!"
              }
            />
          </Box>
        </EaseAppearMotion>
      </div>
      <Contacts />
    </div>
  );
};

Services.proptypes = {};

export default Services;
