import { Container } from "@mantine/core";
import React from "react";
import classes from "./Section.module.css";

const Section: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <section className={classes.Section}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
