import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./FaqAccordion.css";
import { SubTitleText } from "../../utils/utils";
import { remarkableGray } from "../../utils/colors";

const StyledAccordion = styled(Accordion)({
  backgroundColor: "#121212",
  borderBottom: "1px solid #4f4f4f",
});

const StyledIcon = styled(ExpandMoreIcon)({
  color: "white",
});

const StyledTypography = styled(Typography)({
  color: "white",
  fontFamily: "Arimo",
});

const FaqAccordion = ({}) => {
  return (
    <div className="faq-accordion-container">
      <SubTitleText variant="h3" marginBottom={"1rem"}>
        FAQ
      </SubTitleText>
      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
        >
          <StyledTypography>
            Será que o Marco António é um homem? Ou é um rato?
          </StyledTypography>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTypography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </StyledTypography>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion>
        <AccordionSummary
          expandIcon={<StyledIcon />}
          aria-controls="panel2a-content"
          color="primary"
        >
          <StyledTypography>
            Gostaria muito de saber porque é que esta empresa possui tanta
            homossexualidade.
          </StyledTypography>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTypography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </StyledTypography>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
        >
          <StyledTypography>
            Que loucura! Como gasto o meu dinheiro todo aqui?
          </StyledTypography>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTypography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </StyledTypography>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
        >
          <StyledTypography>Accordion 4</StyledTypography>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTypography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </StyledTypography>
        </AccordionDetails>
      </StyledAccordion>
    </div>
  );
};

FaqAccordion.proptypes = {};

export default FaqAccordion;
