import ThemeToggle from "./components/ThemeToggle";
import SimulationGame from "./components/SimulationGame";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Center,
  MantineProvider,
  Title,
} from "@mantine/core";

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
          <Center>
            <Title
              className="text-center my-4 bg-gradient-to-t from-[--mantine-primary-color-filled] inline-block text-transparent bg-clip-text"
              variant="gradient"
            >
              The Prisoners Dilemma
            </Title>
          </Center>
          <SimulationGame />
        </AppShellMain>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
