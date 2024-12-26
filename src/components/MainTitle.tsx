import { Button, Center, Grid, Text, Title } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";

type ScrollIntoViewType = ReturnType<
  typeof useScrollIntoView
>["scrollIntoView"];

interface MainTitleProps {
  scrollToPlay: ScrollIntoViewType;
  scrollToLearnMore: ScrollIntoViewType;
}

function MainTitle({ scrollToPlay, scrollToLearnMore }: MainTitleProps) {
  function handleScrollToPlay() {
    scrollToPlay({ alignment: "start" });
  }

  function handleScrollToLearnMore() {
    scrollToLearnMore({ alignment: "start" });
  }

  return (
    <>
      <Grid justify="center" align="center">
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Center>
            <Title
              order={1}
              className="bg-gradient-to-t from-[--mantine-primary-color-filled] inline-block text-transparent bg-clip-text"
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
            <Button className="mx-auto" onClick={handleScrollToPlay}>
              Play
            </Button>
          </Center>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Text className="text-center">
            Curious about this paradoxical game?
          </Text>
          <Center>
            <Button variant="light" onClick={handleScrollToLearnMore}>
              Learn more
            </Button>
          </Center>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default MainTitle;
