import { IUseHookFormRegister } from "../interfaces";

interface IBuildPayloadToSend {
  data: IUseHookFormRegister;
}

interface InputConfigInterfaceProps {
  valuePrefix: string | undefined;
}

const buildPayloadToSendForm = ({ data }: IBuildPayloadToSend) => {
  let payload = {};
  Object.entries(objToPayload).map(([key, value]: [keyof IUseHookFormRegister, string]) => {
    if (data[key]) {
      let valueOfPayload = data[key];
      if (key === "phone") {
        valueOfPayload = `+${data.country?.phone}${data.phone}`;
      }

      if (key === "proposalJob") {
        valueOfPayload = data.proposalJob?.value as string;
      }
      payload = { ...payload, [value]: valueOfPayload };
    }
  });
  return payload;
};

import { InputInterfaceProps } from "@/form-register/interfaces";

const sxStyleDefault = { width: "100%", margin: "0 auto", marginTop: 1, marginBottom: 2 };

const getConfigInputs = ({ valuePrefix }: InputConfigInterfaceProps): InputInterfaceProps[] => {
  return [
    {
      name: "name",
      label: "Nombres *",
      sx: sxStyleDefault,
      placeholder: "Inserte nombres",
    },
    {
      name: "proposalJob",
      label: "Oferta *",
      sx: sxStyleDefault,
      placeholder: "Seleccione una oferta",
      options: "proposalJobs",
    },
    {
      name: "lastname",
      label: "Apellidos *",
      sx: sxStyleDefault,
      placeholder: "Inserte apellidos",
    },
    {
      name: "mail",
      label: "Email *",
      sx: sxStyleDefault,
      placeholder: "Inserte email de contacto",
    },
    {
      name: "country",
      label: "País",
      sx: sxStyleDefault,
      placeholder: "Seleccione un país",
      options: "countries",
    },
    {
      name: "phone",
      label: "Teléfono",
      sx: sxStyleDefault,
      placeholder: "Inserte teléfono de contacto",
      valuePrefix,
    },
    {
      name: "profile",
      label: "Perfil linkedIn",
      sx: sxStyleDefault,
      placeholder: "Inserte URL de linkedIn",
    },
    {
      name: "file_cv",
      type: "file",
      placeholder: "click para subir archivo",
      sx: sxStyleDefault,
      inputProps: ".pdf,.doc,.docx",
      label: "Sube tu resumen CV *",
    },
    {
      name: "about",
      label: "Cuéntanos sobre ti *",
      sx: sxStyleDefault,
      placeholder: "¿Por qué crees que serías una excelente incorporación?",
      multiline: true,
      rows: 4,
    },
  ];
};

const arrayOfKeysObjToPayload = [
  "proposalJob",
  "name",
  "lastname",
  "mail",
  "phone",
  "profile",
  "file_cv",
  "about",
] as const;
type KeysObjToPayload = (typeof arrayOfKeysObjToPayload)[number];

const objToPayload: { [key in KeysObjToPayload]: string } = {
  proposalJob: "jobId",
  name: "firstName",
  lastname: "lastName",
  mail: "email",
  phone: "phoneNumber",
  profile: "linkedInProfile",
  file_cv: "resumeCv",
  about: "reasonForJoining",
};

export default { buildPayloadToSendForm, getConfigInputs };
