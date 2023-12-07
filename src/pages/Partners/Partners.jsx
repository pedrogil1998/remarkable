import PropTypes from "prop-types";
import { PartnerData } from "../../components/Partner/PartnerData";
import { useState } from "react";
import "./Partners.css";
import { Button } from "@mui/material";
import { PartnerButton } from "../../components/Partner/PartnerMui";
import Contacts from "../../components/Contacts/Contacts";

const Partners = () => {
  const [data, setData] = useState(PartnerData);
  const [collection, setCollection] = useState([
    ...new Set(PartnerData.map((item) => item.type)),
  ]);

  const galleryFilter = (type) => {
    const filteredData = PartnerData.filter((item) => item.type == type);
    setData(filteredData);
  };

  return (
    <div className="partners-container">
      <div className="filter-container">
        <PartnerButton onClick={() => setData(PartnerData)}>Todos</PartnerButton>
        {collection.map((type, index) => (
          <PartnerButton key={index} onClick={() => galleryFilter(type)}>
            {type}
          </PartnerButton>
        ))}
      </div>
      <div className="gallery-container">
        {data.map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.image} />
          </div>
        ))}
      </div>
      <Contacts/>
    </div>
  );
};

Partners.proptypes = {};
export default Partners;
