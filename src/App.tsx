import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import dark from "./styles/themes/dark";
import { ThemeProvider } from "styled-components";
import white from "./styles/themes/white";
import List from "./pages/List";

const App = () => {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Layout>
          <List />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
