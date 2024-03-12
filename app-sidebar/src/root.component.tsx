import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';

const theme = createTheme({
  colors: {
    sula: [
      "#fff4e2",
      "#ffe9cc",
      "#ffd09c",
      "#fdb766",
      "#fca13a",
      "#fb931d",
      "#fc8c0c",
      "#e17900",
      "#c86a00",
      "#ae5a00"
    ]
  }
})

export default function Root(props) {
  return (
    <MantineProvider theme={theme}>
      <section>{props.name} is mounted! Aqui Sidebar</section>
    </MantineProvider>
  );
}
