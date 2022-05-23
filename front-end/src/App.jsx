import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Table from "./components/Table";
import usePerson from "./hooks/usePerson";

function App() {
  document.title = "Prova Full-Stack IN8";

  const person = usePerson();
  const [personData, setPersonData] = useState([]);

  useEffect(() => {
    person.getPerson().then((data) => {
      setPersonData(data);
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <Main setPersonData={setPersonData} />
      <Table personData={personData} />
      <Footer />
    </div>
  );
}

export default App;
