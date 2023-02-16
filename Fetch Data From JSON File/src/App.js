import './components/style.css'
import Data from './components/db'
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {
        Data.map((ele)=>{
        
          return(
            <>
            <div className="userData">
            <h1>{ele.id}</h1>
            <h2>{ele.name}</h2>
            <h3>{ele.class}</h3>
            <h3>{ele.subject}</h3>
            </div>
            </>
          )
        })
      }
    </div>
  );
}
