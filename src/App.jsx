import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div id="root-container">
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
