import { useContext, useState } from "react";
import Wrapper from "./components/Wrapper.jsx";
import Header from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { ResultContext } from "./contexts/resultContext.js";

function App() {
  const queryData = useContext(ResultContext);
  const { queryResult, setQueryResult } = useState({});
  return (
    <>
      <main className="main">
        <ResultContext.Provider value={(queryResult, setQueryResult)}>
          <Wrapper>
            <Header />
          </Wrapper>

          <Wrapper>
            <Footer />
          </Wrapper>
        </ResultContext.Provider>
      </main>
    </>
  );
}

export default App;
