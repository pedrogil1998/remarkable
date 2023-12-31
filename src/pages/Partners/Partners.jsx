import { PartnerData } from "../../components/Partner/PartnerData";
import { useState } from "react";
import "./Partners.css";
import { Box, ToggleButtonGroup, Typography } from "@mui/material";
import { PartnerButton } from "../../components/Partner/PartnerMui";
import Contacts from "../../components/Contacts/Contacts";
import PartnerModal from "../../components/Partner/Modal/PartnerModal";
import LightBackground from "../../components/Animations/LightBackground/LightBackground";
import { SubLongText, TitleText } from "../../utils/utils";
import TuneIcon from "@mui/icons-material/Tune";
import FeedIcon from "@mui/icons-material/Feed";
import EaseAppearMotionAnimate from "../../components/Animations/AppearAnimationAnimate";

const Partners = () => {
  const [data, setData] = useState(PartnerData);
  const collection = [...new Set(PartnerData.map((item) => item.type))];

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
      <Box
        className="upper-container"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <TitleText variant="h2">Mais do que uma agência de Marketing</TitleText>
        <SubLongText className="long-text" variant="h7">
          {"Uma rede de NETWORKING"}
        </SubLongText>
        <SubLongText className="long-text" variant="h7">
          {
            "O nosso trabalho é ajudá-lo a fazer o seu. Precisa de algum serviço noutra área? Não perca tempo."
          }
        </SubLongText>
      </Box>
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

        <EaseAppearMotionAnimate>
          <div className="gallery-container">
            {data.map((item) => (
              <div
                key={item.id}
                className="gallery-item"
                onClick={() => handleOpen(item)}
              >
                <img
                  src={item.image}
                  height={300}
                  width={300}
                />
                <div className="gallery-item-overlay">
                  <FeedIcon sx={{ fontSize: "4.5rem" }} />
                </div>
              </div>
            ))}
            <PartnerModal
              open={open.open}
              item={open.item}
              handleClose={handleClose}
            ></PartnerModal>
          </div>
        </EaseAppearMotionAnimate>
      </Box>
      <Typography variant="h6" style={{ marginBottom: "2rem" }}>
        O seu negócio também pode pertencer à nossa rede. Entre em contacto
        connosco.
      </Typography>
      <Contacts />
    </div>
  );
};

Partners.proptypes = {};
export default Partners;
