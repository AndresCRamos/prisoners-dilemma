import { Container, Stack } from "@mantine/core";
import React from "react";
import ExplanationIntro from "./ExplanationIntro";
import FormalNotation from "./FormalNotation";
import Importance from "./Importance";
const LearnMore: React.FC = () => {
  return (
    <>
      <Container>
        <Stack gap={"md"}>
          <ExplanationIntro />
          <FormalNotation />
          <Importance />
        </Stack>
      </Container>
    </>
  );
};

export default LearnMore;
