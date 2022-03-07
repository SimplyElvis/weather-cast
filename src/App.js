import Wrapper from "./components/Wrapper.jsx";
import Header from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { TitleSm } from "./components/Typography.jsx";

function App() {
  return (
    <>
      <main className="main">
        <Wrapper>
          <Header />
        </Wrapper>

        <Wrapper>
          <Footer />
        </Wrapper>
      </main>
    </>
  );
}

export default App;
