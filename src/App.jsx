import './App.css'
import Greeting from './componts/greeting';
import Header from './componts/header';
import Counter from './componts/counter';


function App() {
  return (
    <>
      <Greeting name="Khaalid" surname="Ahmed" />
      <Header />
      <Counter />
    </>
  )
}

export default App
