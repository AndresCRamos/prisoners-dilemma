import { Stack } from "@mantine/core";
import React from "react";
import classes from "./Section.module.css";

const Section: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <section>
      <Stack justify="center" className={classes.Section}>
        {children}
      </Stack>
    </section>
  );
};

export default Section;
