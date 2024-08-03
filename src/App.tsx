import SimulationGame from "./components/SimulationGame";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <p>Hello World</p>
      <SimulationGame />
    </MantineProvider>
  );
}

export default App;
