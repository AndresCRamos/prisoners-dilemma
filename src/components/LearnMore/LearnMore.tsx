import { Container, Stack } from "@mantine/core";
import React from "react";
import AxelrodTournament from "./Axelrod";
import ExplanationIntro from "./ExplanationIntro";
import FormalNotation from "./FormalNotation";
import Importance from "./Importance";

const LearnMore: React.FC = () => {
  return (
    <>
      <Container>
        <Stack gap={"lg"}>
          <ExplanationIntro />
          <FormalNotation />
          <Importance />
          <AxelrodTournament />
        </Stack>
      </Container>
    </>
  );
};

export default LearnMore;
