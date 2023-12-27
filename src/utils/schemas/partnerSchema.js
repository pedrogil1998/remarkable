import * as yup from "yup";

const requiredMessage = "Preencha este campo por favor.";
const contactMessage = "Contacto inválido.";
const emailMessage = "Email inválido.";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const partnerSchema = yup
  .object({
    name: yup.string().required(requiredMessage),
    company: yup.string().required(requiredMessage),
    contact: yup.string().matches(phoneRegExp, contactMessage),
    email: yup.string().email(emailMessage).required(requiredMessage),
    description: yup.string().required(requiredMessage),
    to_email: yup.string(requiredMessage),
    partner_name: yup.string(requiredMessage),
  })
  .required();
