import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { red, purple } from "@mui/material/colors";
import "./PartnerModal.css";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { partnerSchema } from "../../../utils/schemas/partnerSchema";
import { ErrorText, TitleText } from "../../../utils/utils";
import background from "../../../assets/form/background.png";

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

const TextInput = ({ name, register, required, ...rest }) => (
  <TextField {...register(name, { required })} {...rest} />
);

const SelectInput = ({ name, register, required, children, ...rest }) => (
  <Select {...register(name, { required })} {...rest}>
    {children}
  </Select>
);

const CssSelectInput = styled(SelectInput)({
  "& .MuiSelect-select": {
    backgroundColor: "#d6d6d6",
  },
});

const CssTextField = styled(TextInput)({
  "& label": {
    color: "#A0AAB4",
  },
  "& .MuiFilledInput-root": {
    color: "black",
    backgroundColor: "#d6d6d6",
  },

  "&& .Mui-focused": {
    backgroundColor: "#ffffff",
  },
});

const NoDisplayTextField = styled(TextInput)({
  "& .MuiInputBase-input": {
    display: "none",
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

const PartnerModal = ({ open, item, handleClose }) => {
  const form = useRef();
  const [formValues, setFormValues] = useState({});

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(partnerSchema),
  });
  const watchTitular = watch("titular", "pessoal");
  const onSubmit = (data) => {
    console.log(data);
    //sendEmail(data);
  };

  const handleTextFieldChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   sendEmail(e);
  // };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_19rzorb",
        "template_f88urod",
        { ...formValues, to_email: item?.to_email, partner_name: item?.title },
        "nmzOET3EouBYnpZfA"
      )
      .then(
        (result) => {
          alert("Contacto efetuado com sucesso.");
        },
        (errors) => {
          alert("Algo de errado não permitiu este contacto...");
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
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="modal-box"
          style={{ backgroundImage: background }}
        >
          <Box margin="0.5rem">
            <TitleText
              id="modal-modal-contact"
              variant="h3"
              color="white"
              align="center"
              marginTop="1rem"
            >
              {"Formulário de Contacto"}
            </TitleText>
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              color="gray"
              align="center"
            >
              {item?.title || "Title"}
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              color="gray"
            >
              {item?.description || "Esta empresa confia na reMArkable."}
            </Typography>
          </Box>
          <Box margin="0 1rem 0 0">
            <FormControl fullWidth sx={{ m: 1 }}>
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
                color={"primary"}
                label="Descrição do Serviço"
                multiline
                rows={4}
                variant="filled"
                style={{
                  marginBottom: !errors.description?.message && "1.5rem",
                }}
              />
              <ErrorText>{errors.description?.message}</ErrorText>

              {/* <NoDisplayTextField className="no-display" name="to_email">
                {item?.to_email}
              </NoDisplayTextField>
              <NoDisplayTextField className="no-display" name="partner_name">
                {item?.title}
              </NoDisplayTextField> */}
              <ErrorText>{errors.to_email?.message}</ErrorText>
              <ErrorText>{errors.partner_name?.message}</ErrorText>
              <Button
                sx={{ margin: "1rem 10rem 0" }}
                size={"small"}
                type="submit"
                variant="outlined"
                color="secondary"
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
