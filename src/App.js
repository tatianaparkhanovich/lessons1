import "./App.css";
import { Main } from "./components/Main/Main";
import { Header } from "./components/header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header className="Header" />
      <Main className="Main" />
      <Footer className="Footer" />
    </div>
  );
}

export default App;
