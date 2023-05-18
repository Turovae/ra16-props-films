import './App.css'
import Stars from './components/Stars/Stars';

function App() {
  const counts = [0, 1, 2, 3, 4, 5, 6, 'text', NaN];
 


  return (
    <>
      {
        counts.map((count, index) => typeof count === 'number' ? <Stars key={index} count={count}/> : null)
      }
    </>
  )
}

export default App
