import { Card } from "@mui/material";
import { Title, Form } from "../components";
import { getCountriesWithCode, getCountryDefault, getProposalJob } from "@/actions/actions-offers";

export default async function ViewResgister() {
  const countryDefaultValue = await getCountryDefault();
  const proposalOptions = await getProposalJob();
  const countries = await getCountriesWithCode();

  const objConfigurationAutocomplete = {
    country: {
      options: countries,
    },
    proposalJob: {
      options: proposalOptions,
    },
  };
  return (
    <div className="z-10 w-full max-w-5xl items-center flex-col">
      <Card>
        <Title />
        <Form defaultValue={countryDefaultValue} objConfigurationAutocomplete={objConfigurationAutocomplete} />
      </Card>
    </div>
  );
}
