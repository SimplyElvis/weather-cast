import { ResultContextProvider } from "./contexts/resultContext.js";
import Wrapper from "./components/Wrapper.jsx";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <>
      <main className="main">
        <Wrapper>
          <Navbar />
        </Wrapper>
        <ResultContextProvider>
          <Wrapper>
            <Header />
          </Wrapper>
        </ResultContextProvider>
      </main>
    </>
  );
}

export default App;
