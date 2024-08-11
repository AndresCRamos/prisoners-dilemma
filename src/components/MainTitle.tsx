import { Grid, Title } from "@mantine/core";

function MainTitle() {
  return (
    <>
      <Grid columns={2}>
        <Title
          className="text-center my-4 bg-gradient-to-t from-[--mantine-primary-color-filled] inline-block text-transparent bg-clip-text"
          variant="gradient"
        >
          The Prisoners Dilemma
        </Title>
      </Grid>
    </>
  );
}

export default MainTitle;
