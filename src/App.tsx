import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  MantineProvider,
} from "@mantine/core";
import MainTitle from "./components/MainTitle";
import Section from "./components/Section";
import SimulationGame from "./components/SimulationGame";
import ThemeToggle from "./components/ThemeToggle";

function App() {
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
            <MainTitle />
          </Section>
          <Section>
            <SimulationGame />
          </Section>
        </AppShellMain>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
