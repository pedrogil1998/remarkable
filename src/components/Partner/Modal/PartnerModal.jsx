import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Box,
  Button,
  FormControl,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { partnerSchema } from "../../../utils/schemas/partnerSchema";
import { ErrorText, SubTitleText } from "../../../utils/utils";
import background from "../../../assets/form/background.png";
import ReCAPTCHA from "react-google-recaptcha";
import ClearIcon from "@mui/icons-material/Clear";
import emailjs from "@emailjs/browser";
import "./PartnerModal.css";
import CompanyInfo from "../CompanyInfo/CompanyInfo";

const TextInput = ({ name, register, required, ...rest }) => (
  <TextField {...register(name, { required })} {...rest} />
);

TextInput.propTypes = {
  name: PropTypes.string,
  register: PropTypes.func,
  required: PropTypes.bool,
};

const SelectInput = ({ name, register, required, children, ...rest }) => (
  <Select {...register(name, { required })} {...rest}>
    {children}
  </Select>
);

SelectInput.propTypes = {
  name: PropTypes.string,
  register: PropTypes.func,
  required: PropTypes.bool,
  children: PropTypes.any,
};

const CssSelectInput = styled(SelectInput)({
  "& .MuiSelect-select": {
    backgroundColor: "#d6d6d6",
  },
});

const CssTextField = styled(TextInput)({
  "& label": {
    color: "#595959",
  },
  "& .MuiFilledInput-root": {
    color: "black",
    backgroundColor: "#d6d6d6",
  },

  backgroundColor: "#ffffff",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    tertiary: {
      main: "#595959",
    },
  },
});

const PartnerModal = ({ open, item, handleClose }) => {
  const form = useRef();
  const [recaptcha, setRecaptcha] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(partnerSchema),
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleShowSuccessAlert = () => {
    setShowSuccessAlert(true);
  };

  const handleCloseSuccessAlert = () => {
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 2000);
  };

  const handleShowErrorAlert = () => {
    setShowErrorAlert(true);
  };

  const handleCloseErrorAlert = () => {
    setTimeout(() => {
      setShowErrorAlert(false);
    }, 2000);
  };

  const watchTitular = watch("titular", "pessoal");

  const onClose = () => {
    setRecaptcha(null);
    reset();
    handleClose();
  };
  const onSubmit = (data) => {
    sendEmail(data);
  };

  const sendEmail = (data) => {
    emailjs
      .send(
        "service_19rzorb",
        "template_f88urod",
        { ...data, to_email: item?.to_email, partner_name: item?.title },
        "nmzOET3EouBYnpZfA"
      )
      .then(
        () => {
          handleShowSuccessAlert();
          handleCloseSuccessAlert();
        },
        (resError) => {
          if (errors || resError) {
            handleShowErrorAlert();
            handleCloseErrorAlert();
          }
        }
      )
      .finally(() => {
        onClose();
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          position: "absolute",
          top: "1rem",
          left: 0,
          right: 0,
          zIndex: 999,
        }}
      >
        {showSuccessAlert && (
          <Alert
            severity="success"
            onClose={handleCloseSuccessAlert}
            className="alert-div"
          >
            O contacto foi realizado com sucesso! Será contactado brevemente.
          </Alert>
        )}

        {showErrorAlert && (
          <Alert
            severity="error"
            onClose={handleCloseErrorAlert}
            className="alert-div"
          >
            Algo correu mal. Tente novamente mais tarde.
          </Alert>
        )}
      </div>

      <Modal
        open={open}
        onClose={onClose}
        closeAfterTransition
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="modal-box"
          style={{ backgroundImage: background }}
        >
          <div className="close-icon-div">
            <ClearIcon className="close-icon" onClick={onClose} />
          </div>
          <CompanyInfo item={item} />
          <Box margin="0.5rem">
            <SubTitleText
              id="modal-modal-contact"
              variant="h3"
              color="white"
              align="center"
              marginTop="1rem"
            >
              {"Formulário de Contacto"}
            </SubTitleText>
          </Box>
          <Box margin="0 1rem 0 0">
            <FormControl
              fullWidth
              sx={{
                m: 1,
              }}
            >
              <CssSelectInput
                defaultValue="pessoal"
                name="titular"
                register={register}
                style={{ marginBottom: "1.5rem" }}
              >
                <MenuItem value="organizacao">Organização</MenuItem>
                <MenuItem value="pessoal">Pessoal</MenuItem>
              </CssSelectInput>
              <CssTextField
                name="name"
                register={register}
                required
                label={watchTitular === "pessoal" ? "Nome" : "Empresa"}
                color={"primary"}
                variant={"filled"}
                style={{ marginBottom: !errors.name?.message && "1.5rem" }}
              />
              <ErrorText>{errors.name?.message}</ErrorText>

              <CssTextField
                name="contact"
                register={register}
                color={"primary"}
                label="Contacto"
                variant="filled"
                style={{ marginBottom: !errors.contact?.message && "1.5rem" }}
              />
              <ErrorText>{errors.contact?.message}</ErrorText>
              <CssTextField
                name="email"
                register={register}
                color={"primary"}
                label="E-mail"
                variant="filled"
                style={{ marginBottom: !errors.email?.message && "1.5rem" }}
              />
              <ErrorText>{errors.email?.message}</ErrorText>
              <CssTextField
                name="description"
                register={register}
                color={"tertiary"}
                label="Descrição do Serviço"
                multiline
                rows={4}
                variant="filled"
                style={{
                  marginBottom: !errors.description?.message && "1.5rem",
                }}
              />
              <ErrorText>{errors.description?.message}</ErrorText>
              <div className="recaptcha-div">
                <ReCAPTCHA
                  sitekey="6Lcx80UpAAAAALwzUnJHHiiw1QkMvlwFcufWhwW0"
                  onChange={(val) => setRecaptcha(val)}
                />
              </div>
              <Button
                className="send-button"
                size={"small"}
                type="submit"
                variant="outlined"
                color="secondary"
                disabled={!recaptcha}
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

PartnerModal.propTypes = {
  open: PropTypes.bool,
  item: PropTypes.object,
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func,
};

export default PartnerModal;
