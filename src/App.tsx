import {
  Affix,
  AppShell,
  AppShellHeader,
  AppShellMain,
  Box,
  Button,
  MantineProvider,
  Stack,
  Transition,
} from "@mantine/core";
import { useInViewport, useMergedRef, useScrollIntoView } from "@mantine/hooks";
import LearnMore from "./components/LearnMore";
import MainTitle from "./components/MainTitle";
import Section from "./components/Section";
import SimulationGame from "./components/SimulationGame";
import Sources from "./components/Sources";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const { scrollIntoView: scrollToPlay, targetRef: playRefScroll } =
    useScrollIntoView<HTMLDivElement>({ offset: 72 });

  const { ref: playRefViewport, inViewport: inViewportPlay } = useInViewport();

  const playRef = useMergedRef(playRefScroll, playRefViewport);

  const { scrollIntoView: scrollToLearnMore, targetRef: learnMoreRef } =
    useScrollIntoView<HTMLDivElement>({ offset: 72 });

  const { scrollIntoView: scrollToSources, targetRef: sourcesRef } =
    useScrollIntoView<HTMLDivElement>();

  const { scrollIntoView: scrollToMainTitle, targetRef: mainTitleRefScroll } =
    useScrollIntoView<HTMLDivElement>({ offset: 72 });

  const { ref: mainTitleRefViewport, inViewport: inViewportMainTitle } =
    useInViewport();

  const mainTitleRef = useMergedRef(mainTitleRefScroll, mainTitleRefViewport);

  return (
    <MantineProvider>
      <AppShell header={{ height: 60 }} padding="sm">
        <AppShellHeader
          classNames={{
            header: "flex justify-end pr-4",
          }}
        >
          <ThemeToggle />
        </AppShellHeader>
        <AppShellMain>
          <Section>
            <Box ref={mainTitleRef}>
              <MainTitle
                scrollToPlay={scrollToPlay}
                scrollToLearnMore={scrollToLearnMore}
                scrollToSources={scrollToSources}
              />
            </Box>
          </Section>
          <Section>
            <Box ref={playRef}>
              <SimulationGame />
            </Box>
          </Section>
          <Section>
            <Box ref={learnMoreRef}>
              <LearnMore />
            </Box>
          </Section>
          <Section>
            <Box ref={sourcesRef}>
              <Sources />
            </Box>
          </Section>
          <Affix position={{ bottom: 20, right: 20 }}>
            <Stack gap={"xs"}>
              <Transition
                transition={"fade-left"}
                mounted={!inViewportMainTitle}
              >
                {(styles) => (
                  <Button
                    style={styles}
                    onClick={() => scrollToMainTitle({ alignment: "center" })}
                  >
                    Go to top
                  </Button>
                )}
              </Transition>
              <Transition
                transition={"fade-left"}
                mounted={!inViewportMainTitle && !inViewportPlay}
              >
                {(styles) => (
                  <Button
                    style={styles}
                    onClick={() => scrollToPlay({ alignment: "center" })}
                  >
                    Lets play
                  </Button>
                )}
              </Transition>
            </Stack>
          </Affix>
        </AppShellMain>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
