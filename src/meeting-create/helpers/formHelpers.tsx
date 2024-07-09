import { Radio } from "@mui/material";

const configConst = {
  name: "whenStartMeeting",
  title: "¿Cuándo desea comenzar la reunión?",
  defaultValue: "now",
};

const builderSelectTimeDay = {
  format: "DD/MM/YYYY hh:mm a",
  label: "Seleccione la fecha y hora",
  isDisablePast: true,
};

const getBuilderFormMeetingCreate = [
  {
    value: "now",
    label: "Comenzar la reunión inmediatamente",
    component: <Radio />,
  },
  {
    value: "later",
    label: "Programar reunión con fecha/hora",
    component: <Radio />,
  },
];

export default {
  builderSelectTimeDay,
  getBuilderFormMeetingCreate,
  configConst,
};
