import SimulationGame from "./components/SimulationGame";
import { Center, MantineProvider, Title } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <Center>
        <Title
          className="text-center my-4 bg-gradient-to-t from-[--mantine-primary-color-filled] inline-block text-transparent bg-clip-text"
          variant="gradient"
        >
          The Prisoners Dilemma
        </Title>
      </Center>
      <SimulationGame />
    </MantineProvider>
  );
}

export default App;
