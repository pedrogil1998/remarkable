import PropTypes from "prop-types";
import { PartnerData } from "../../components/Partner/PartnerData";
import { useState } from "react";
import "./Partners.css";
import { Box, Button, ToggleButtonGroup } from "@mui/material";
import { PartnerButton } from "../../components/Partner/PartnerMui";
import Contacts from "../../components/Contacts/Contacts";
import EaseAppearMotion from "../../components/Animations/AppearAnimation";
import PartnerModal from "../../components/Partner/Modal/PartnerModal";
import LightBackground from "../../components/Animations/LightBackground/LightBackground";
import { SubLongText, TitleText } from "../../utils/utils";
import TuneIcon from "@mui/icons-material/Tune";
const Partners = () => {
  const [data, setData] = useState(PartnerData);
  const [collection, setCollection] = useState([
    ...new Set(PartnerData.map((item) => item.type)),
  ]);

  const galleryFilter = (type) => {
    const filteredData = PartnerData.filter((item) => item.type == type);
    setData(filteredData);
  };

  //MODAL
  const [open, setOpen] = useState({ item: null, open: false });
  const handleOpen = (item) => setOpen({ item: item, open: true });
  const handleClose = () => setOpen({ item: null, open: false });

  const [alignment, setAlignment] = useState("todos");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="partners-container">
      <LightBackground zIndex={-1} />
      <TitleText variant="h2">REDE DE PARCERIAS</TitleText>
      <SubLongText className="long-text" variant="h7">
        {
          "O nosso trabalho é ajuda-te a fazer o teu. Precisas de algum serviço noutra área? Não percas tempo, procura ajuda nos nossos parceiros:"
        }
      </SubLongText>

      <Box className="box-filters-gallery">
        <div className="filter-container">
          <Box className="filter-tab">
            <TuneIcon />
          </Box>
          <ToggleButtonGroup
            orientation="vertical"
            value={alignment}
            exclusive
            onChange={handleAlignment}
          >
            <PartnerButton value="todos" onClick={() => setData(PartnerData)}>
              Todos
            </PartnerButton>
            {collection.map((type, index) => (
              <PartnerButton
                value={type}
                key={index}
                onClick={() => galleryFilter(type)}
              >
                {type}
              </PartnerButton>
            ))}
          </ToggleButtonGroup>
        </div>

        <EaseAppearMotion>
          <div className="gallery-container">
            {data.map((item) => (
              <div key={item.id} className="gallery-item">
                <img src={item.image} onClick={() => handleOpen(item)} />
              </div>
            ))}
            <PartnerModal
              open={open.open}
              item={open.item}
              handleClose={handleClose}
            ></PartnerModal>
          </div>
        </EaseAppearMotion>
      </Box>
      <Contacts />
    </div>
  );
};

Partners.proptypes = {};
export default Partners;
