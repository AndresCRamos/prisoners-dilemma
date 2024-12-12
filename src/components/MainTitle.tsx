import { Button, Center, Grid, Text, Title } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";

type ScrollIntoViewType = ReturnType<
  typeof useScrollIntoView
>["scrollIntoView"];

interface MainTitleProps {
  scrollToPlay: ScrollIntoViewType;
}

function MainTitle({ scrollToPlay }: MainTitleProps) {
  function handleScroll() {
    scrollToPlay({ alignment: "start" });
  }

  return (
    <>
      <Grid justify="center" align="center">
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Center>
            <Title
              order={1}
              className="bg-gradient-to-t from-[--mantine-primary-color-filled] inline-block text-transparent bg-clip-text text-center"
            >
              The Prisoners Dilemma
            </Title>
          </Center>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Center className="flex-col">
            <Title order={2} size="xl" className="font-semibold">
              The most famous game theory paradox
            </Title>
            <Text className="font-light">
              A game about cooperation, betrayal and life
            </Text>
          </Center>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Text className="text-center">
            Want to test some of the strategies?
          </Text>
          <Center>
            <Button className="mx-auto" onClick={handleScroll}>
              Play
            </Button>
          </Center>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Text className="text-center">
            Curious about this paradoxical game?
          </Text>
          <Center>
            <Button variant="light">Learn more</Button>
          </Center>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default MainTitle;
