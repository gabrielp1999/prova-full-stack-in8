import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Table from "./components/Table";
import usePerson from "./hooks/usePerson";

function App() {
  document.title = "Prova Full-Stack IN8";

  const person = usePerson();
  const [personData, setPersondata] = useState([]);

  useEffect(() => {
    person.getPerson().then((data) => {
      setPersondata(data);
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <Main setPersondata={setPersondata} />
      <Table personData={personData} />
      <Footer />
    </div>
  );
}

export default App;
