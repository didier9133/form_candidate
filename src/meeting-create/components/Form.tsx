"use client";

import { Box, Card, Grid, Tooltip, Typography } from "@mui/material";
import { ContainerButtons, RadioOptionComponent, SelectTimeDay, SkeletonLink } from ".";
import { useCallCreate, useHookForm } from "../hooks";
import { formHelpers } from "../helpers";
import { IFormCreate } from "../interface";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Link from "next/link";

interface ILinkMeetingProps {
  id: string;
}
const sxStyleForm = { display: "flex", flexDirection: "column", justifyContent: "center" };

export const Form = () => {
  const { getBuilderFormMeetingCreate, configConst, builderSelectTimeDay } = formHelpers;
  const { isLoading, call, handleCreateMeeting } = useCallCreate();
  const { handleSubmit, watch, register, control, formState } = useHookForm();

  const onSubmit = (data: IFormCreate) => {
    const startAt = data.dateTimePicker?.toISOString();
    console.log("onSubmit", startAt);
    handleCreateMeeting({ startAt: watch("whenStartMeeting") === "now" ? "" : startAt });
  };
  const { errors } = formState;

  return (
    <>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={sxStyleForm}>
        <Grid container spacing={2}>
          <Grid item xs={watch("whenStartMeeting") === "later" ? 6 : 12}>
            <RadioOptionComponent
              defaultValue={configConst.defaultValue}
              title={configConst.title}
              name="whenStartMeeting"
              register={register}
              builder={getBuilderFormMeetingCreate}
            />
          </Grid>

          {watch("whenStartMeeting") === "later" && (
            <Grid item xs={12} md={6}>
              <SelectTimeDay
                isDisablePast={builderSelectTimeDay.isDisablePast}
                label={builderSelectTimeDay.label}
                format={builderSelectTimeDay.format}
                name="dateTimePicker"
                control={control}
                errorMessage={errors.dateTimePicker?.message}
              />
            </Grid>
          )}
          <ContainerButtons />
        </Grid>
      </Box>

      {isLoading && <SkeletonLink />}
      {call?.id && <LinkMeeting id={call.id} />}
    </>
  );
};

const LinkMeeting = ({ id }: ILinkMeetingProps) => {
  const path = `/room/${id}`;
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;

  return (
    <Card
      style={{
        margin: "0px",
        marginTop: "2rem",
      }}>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}>
        <Link href={path}>
          <Typography sx={{ textDecoration: "underline" }} variant="body2">
            {url}
          </Typography>
        </Link>
        <Tooltip title={"Copiar"}>
          <div
            onClick={() => {
              navigator.clipboard.writeText(url);
            }}>
            <ContentCopyIcon fontSize="small" />
          </div>
        </Tooltip>
      </Box>
    </Card>
  );
};
