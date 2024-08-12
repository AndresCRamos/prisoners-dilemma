import { Grid, Text, Title } from "@mantine/core";

function MainTitle() {
  return (
    <>
      <Grid align="center" justify="center">
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Title className="text-center my-4 bg-gradient-to-t from-[--mantine-primary-color-filled] inline-block text-transparent bg-clip-text border-white border-2 focus:border-red-600">
            The Prisoners Dilemma
          </Title>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Text>The most famous game theory paradox</Text>
          <Text> Test</Text>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default MainTitle;
