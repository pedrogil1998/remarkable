import PropTypes from "prop-types";
import { PartnerData } from "../../components/Partner/PartnerData";
import { useState } from "react";
import "./Partners.css";
import { Button } from "@mui/material";
import { PartnerButton } from "../../components/Partner/PartnerMui";
import Contacts from "../../components/Contacts/Contacts";
import EaseAppearMotion from "../../components/Animations/AppearAnimation";
import PartnerModal from "../../components/Partner/Modal/PartnerModal";
import LightBackground from "../../components/Animations/LightBackground/LightBackground";

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

  return (
    <div className="partners-container">
      <div className="filter-container">
        <PartnerButton onClick={() => setData(PartnerData)}>
          Todos
        </PartnerButton>
        {collection.map((type, index) => (
          <PartnerButton key={index} onClick={() => galleryFilter(type)}>
            {type}
          </PartnerButton>
        ))}
      </div>
      <LightBackground>
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
      </LightBackground>
      <Contacts />
    </div>
  );
};

Partners.proptypes = {};
export default Partners;
