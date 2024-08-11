import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  MantineProvider,
} from "@mantine/core";
import MainTitle from "./components/MainTitle";
import SimulationGame from "./components/SimulationGame";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <MantineProvider>
      <AppShell header={{ height: 60 }}>
        <AppShellHeader
          classNames={{
            header: "flex justify-end pr-4",
          }}
        >
          <ThemeToggle />
        </AppShellHeader>
        <AppShellMain>
          <MainTitle />
          <SimulationGame />
        </AppShellMain>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
