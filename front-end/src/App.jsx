import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Table from "./components/Table";

function App() {
  document.title = "Prova Full-Stack IN8";
  return (
    <div className="App">
      <Header />
      <Main />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
