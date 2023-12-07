import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import "./PartnerModal.css";

const PartnerModal = ({ open, item, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box" padding="2rem">
          <Box>
          <Typography id="modal-modal-contact" variant="h3" component="h2">
              {"Formulário de Contacto"}
            </Typography>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              {item?.title || "Title"}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {item?.description || "Esta empresa confia na reMArkable."}
            </Typography>
          </Box>
          <Box margin="0 2rem 0 0">
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel>Nome</InputLabel>
              <OutlinedInput id="outlined-adornment-amount" label="Amount" />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel>Contacto</InputLabel>
              <OutlinedInput id="outlined-adornment-amount" label="Amount" />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel>E-mail</InputLabel>
              <OutlinedInput id="outlined-adornment-amount" label="Amount" />
            </FormControl>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

PartnerModal.proptype = {
  open: PropTypes.obj,
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func,
};

export default PartnerModal;
