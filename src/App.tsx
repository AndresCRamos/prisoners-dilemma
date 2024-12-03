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
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const { scrollIntoView: scrollToPlay, targetRef: playRef } =
    useScrollIntoView<HTMLDivElement>({ offset: 72 });
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
            <MainTitle scrollToPlay={scrollToPlay} />
          </Section>
          <Section>
            <LearnMore />
          </Section>
          <Section>
            <Box ref={playRef}>
              <SimulationGame />
            </Box>
          </Section>
        </AppShellMain>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
