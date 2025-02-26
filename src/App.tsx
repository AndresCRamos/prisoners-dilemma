import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Box,
  MantineProvider,
} from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import LearnMore from "./components/LearnMore";
import MainTitle from "./components/MainTitle";
import Section from "./components/Section";
import SimulationGame from "./components/SimulationGame";
import Sources from "./components/Sources";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const { scrollIntoView: scrollToPlay, targetRef: playRef } =
    useScrollIntoView<HTMLDivElement>({ offset: 72 });

  const { scrollIntoView: scrollToLearnMore, targetRef: learnMoreRef } =
    useScrollIntoView<HTMLDivElement>({ offset: 72 });

  const { scrollIntoView: scrollToSources, targetRef: sourcesRef } =
    useScrollIntoView<HTMLDivElement>();

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
            <MainTitle
              scrollToPlay={scrollToPlay}
              scrollToLearnMore={scrollToLearnMore}
              scrollToSources={scrollToSources}
            />
          </Section>
          <Box ref={playRef}>
            <Section>
              <SimulationGame />
            </Section>
          </Box>
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
        </AppShellMain>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
