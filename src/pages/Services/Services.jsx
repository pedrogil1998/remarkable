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
import data from "../../components/ServiceCard/ServiceCardInfo.json";

const Services = () => {
  return (
    <div className="service-container">
      <div className="service-content">
        <TitleText variant="h2">O TEU FUTURO COMEÇA AQUI</TitleText>
        <EaseAppearMotion className="lines-content">
          <Box className="service-line-box">
            <ServiceCard
              name={data.services[0].name}
              icon={marketingdigital}
              description={data.services[0].description}
            />
            <ServiceCard
              name={data.services[1].name}
              icon={gestaofrotas}
              description={data.services[1].description}
            />
            <ServiceCard
              name={data.services[2].name}
              icon={branding}
              description={data.services[2].description}
              last
            />
          </Box>
          <Box className="service-line-box">
            <ServiceCard
              name={data.services[3].name}
              icon={gestaoredesociais}
              description={data.services[3].description}
            />
            <ServiceCard
             name={data.services[4].name}
              icon={planosmarketing}
              description={data.services[4].description}
            />
            <ServiceCard
              name={data.services[5].name}
              icon={siteseweb}
              description={data.services[5].description}
              last
            />
          </Box>
          <Box className="service-line-box">
            <ServiceCard
              wide
              name={data.services[6].name}
              icon={plano360}
              description={data.services[6].description}
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
