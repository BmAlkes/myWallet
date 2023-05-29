import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import { useTheme } from "./context/theme";
import dark from "./styles/themes/dark";

const App = () => {
  const { theme } = useTheme();
  console.log(theme);
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
