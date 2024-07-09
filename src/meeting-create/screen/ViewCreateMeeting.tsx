import { Card } from "@mui/material";
import { TitleCreate } from "../components/Title";
import { Form } from "../components/Form";

export const ViewCreateMeating = () => {
  return (
    <div className="z-10 w-full max-w-5xl items-center flex-col">
      <Card>
        <TitleCreate />
        <Form />
      </Card>
    </div>
  );
};
