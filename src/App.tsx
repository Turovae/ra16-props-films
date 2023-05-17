import './App.css'
import Stars from './components/Stars/Stars';

function App() {
  const counts = [...Array(6).keys()] //[0, 1, 2, 3, 4, 5, 6];
 


  return (
    <>
      {
        counts.map((count, index) => <Stars key={index} count={count}/>)
      }
      <Stars count={'bla'} />
      <Stars count={NaN} />
    </>
  )
}

export default App
