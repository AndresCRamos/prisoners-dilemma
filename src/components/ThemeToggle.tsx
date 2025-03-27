import {
  Button,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";

function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <Group justify="end">
      <Button
        variant={"light"}
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        aria-label="Toggle color scheme"
      >
        Toggle theme
      </Button>
    </Group>
  );
}

export default ThemeToggle;
