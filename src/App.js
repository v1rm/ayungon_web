import { useState } from "react";
import Navbar from "./components/Navbar";
import BidsAndAward from "./views/BidsAndAward";
import Contact from "./views/Contact";
import FullDisclosure from "./views/FullDisclosure";
import HomePage from "./views/HomePage";
import Officials from "./views/Officials";

function App() {
  const [pageNavigator, setPageNavigator] = useState(1);
  return (
    <div className="App ">
      <Navbar setView={setPageNavigator} />
      {pageNavigator === 1 && <HomePage />}
      {pageNavigator === 2 && <BidsAndAward />}
      {pageNavigator === 3 && <FullDisclosure />}
      {pageNavigator === 4 && <Officials />}
      {pageNavigator === 5 && <Contact />}
    </div>
  );
}

export default App;
