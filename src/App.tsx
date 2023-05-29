import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import { useTheme } from "./context/theme";

const App = () => {
  const { theme } = useTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </>
  );
};

export default App;
