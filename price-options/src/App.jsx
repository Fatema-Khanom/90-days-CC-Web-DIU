//  import Nav from './components/daisyNav/Nav'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      {/* <Nav></Nav> */}
        <PriceOptions></PriceOptions>
        <LineChart></LineChart>
    </>
  )
}

export default App
