import React, { useState } from "react";
import "./App.css";

import Footer from "./Components/Footer";
import Headers from "./Components/Headers";
import Information from "./Components/Information";
import Modal from "./Components/Modal";

function App() {
  const [isModal, setIsModal] = useState(false);
  const fun = () => {
    console.log("hey");
    setIsModal(!isModal);
  };

  return (
    <div className="App">
      {isModal ? <Modal onClickFun={fun} /> : <Headers onClickFun={fun} />}
      <Information />
      <Footer />
    </div>
  );
}

export default App;
