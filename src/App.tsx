import ThemeToggle from "./components/ThemeToggle";
import SimulationGame from "./components/SimulationGame";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Container,
  MantineProvider,
  Title,
} from "@mantine/core";
import MainTitle from "./components/MainTitle";

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
          <Container>
            <MainTitle />
            <Title
              className="text-center my-4 bg-gradient-to-t from-[--mantine-primary-color-filled] inline-block text-transparent bg-clip-text"
              variant="gradient"
            >
              The Prisoners Dilemma
            </Title>
            <SimulationGame />
          </Container>
        </AppShellMain>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
