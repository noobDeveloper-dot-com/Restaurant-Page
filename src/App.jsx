// import { useState } from 'react'
import Home from "../components/Home";
import Navbar from "../components/Navbar";


function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <section className="app">
        <Navbar />
        <Home/>
      </section>
    </>
  );
}

export default App;
