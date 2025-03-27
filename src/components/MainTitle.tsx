import { Button, Center, Grid, Stack, Text, Title } from "@mantine/core";
import type { useScrollIntoView } from "@mantine/hooks";

type ScrollIntoViewType = ReturnType<
  typeof useScrollIntoView
>["scrollIntoView"];

interface MainTitleProps {
  scrollToPlay: ScrollIntoViewType;
  scrollToLearnMore: ScrollIntoViewType;
  scrollToSources: ScrollIntoViewType;
}

function MainTitle({
  scrollToPlay,
  scrollToLearnMore,
  scrollToSources,
}: MainTitleProps) {
  function handleScrollToPlay() {
    scrollToPlay({ alignment: "center" });
  }

  function handleScrollToLearnMore() {
    scrollToLearnMore({ alignment: "start" });
  }

  function handleScrollToSources() {
    scrollToSources({ alignment: "start" });
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
            <Button className="mx-auto" onClick={handleScrollToPlay}>
              Play
            </Button>
          </Center>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Stack gap={"lg"}>
            <Stack gap={"xs"}>
              <Text className="text-center">
                Curious about this paradoxical game?
              </Text>
              <Center>
                <Button variant="light" onClick={handleScrollToLearnMore}>
                  Learn more
                </Button>
              </Center>
            </Stack>
          </Stack>
        </Grid.Col>
        <Grid.Col>
          <Stack gap={"xs"}>
            <Text className="text-center">
              Nice argument, what are you sources?
            </Text>
            <Center>
              <Button variant="light" onClick={handleScrollToSources}>
                Check them here
              </Button>
            </Center>
          </Stack>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default MainTitle;
