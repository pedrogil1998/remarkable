import { useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { red, purple } from "@mui/material/colors";
import "./PartnerModal.css";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import emailjs from "@emailjs/browser";

const WhiteBorderOutlinedInput = styled(OutlinedInput)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;

const CssTextField = styled(TextField)({
  "& label": {
    color: "#A0AAB4",
  },
  "& .MuiInputBase-input": {
    color: "#adadad",
  },
  // '& .MuiInput-underline:after': {
  //   borderBottom: '2px solid#B2BAC2',
  // },
  // '& .MuiFilledInput-root.Mui-focused': {
  //   borderBottom: '2px solid #FFFFFF',
  // },
  // '& .MuiOutlinedInput-root': {
  //   '& fieldset': {
  //     borderColor: '#E0E3E7',
  //   },
  //   '&:hover fieldset': {
  //     borderColor: '#B2BAC2',
  //   },
  //   '&.Mui-focused fieldset': {
  //     borderColor: '#6F7E8C',
  //   },
  // },
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

const PartnerModal = ({ open, item, handleClose }) => {
  const form = useRef();
  const [formValues, setFormValues] = useState({ partner_name: item?.title });
  const handleTextFieldChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    sendEmail(e);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_19rzorb",
        "template_f88urod",
        form.current,
        "nmzOET3EouBYnpZfA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form ref={form} className="modal-box">
          <Box margin="0.5rem">
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
          <Box margin="0 1rem 0 0">
            <FormControl fullWidth sx={{ m: 1 }}>
              <CssTextField
                color={"primary"}
                name="name"
                label="Nome"
                variant="filled"
                onChange={handleTextFieldChange}
              />

              <CssTextField
                color={"primary"}
                name="contact"
                label="Contacto"
                variant="filled"
                onChange={handleTextFieldChange}
              />
              {/* <InputLabel style={{ color: "white", borderColor: "white" }}>
                E-mail
              </InputLabel> */}
              <CssTextField
                color={"primary"}
                name="email"
                label="E-mail"
                variant="filled"
                onChange={handleTextFieldChange}
              />
              {/* <InputLabel style={{ color: "white", borderColor: "white" }}>
                E-mail
              </InputLabel> */}
              <CssTextField
                color={"primary"}
                name="description"
                label="Descrição do Serviço"
                multiline
                rows={4}
                variant="filled"
                onChange={handleTextFieldChange}
              />
              <Button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                variant="outlined"
              >
                Enviar
              </Button>
            </FormControl>
          </Box>
        </form>
      </Modal>
    </ThemeProvider>
  );
};

PartnerModal.proptype = {
  open: PropTypes.obj,
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func,
};

export default PartnerModal;
