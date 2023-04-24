import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [list, setList] = useState([]);
  const api = "https://jsonplaceholder.typicode.com/posts";
  const fetchData = async (api) => {
    try {
      const res = await fetch(api);
      const data = await res.json();
      setList(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData(api);
  }, []);

  return (
    <div className="App">
      {list &&
        list.map((ele) => {
          return <h1>{ele.title}</h1>;
        })}
    </div>
  );
}
