import "./App.css";
import Header from "./components/header";
import Greeting from "./components/greeting";
import Counter from "./components/counter";
function App() {
  return (
    <>
      <Header />
      <Greeting name="Khaalid" surname="Ahmed" />

      <Counter />
    </>
  );
}

export default App;