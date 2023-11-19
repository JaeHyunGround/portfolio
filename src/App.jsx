import "./App.scss";
import Main from "./components/Main/Main.jsx";
import Info from "./components/Info/Info.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Activities from "./components/Activities/Activities.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Info />
      <Projects />
      <Activities />
      <Footer />
    </div>
  );
}

export default App;
