import "./App.css";
import { useEffect, useState } from "react";
import Cosmetics from "./components/Cosmetics/Cosmetics";
import Shoes from "./components/Shoes/Shoes";

function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const userData = users.map((user) => <Cosmetics key={user.id} user={user} />);

  return (
    <div className="App">
      <h1>This is react developer link here</h1>
      <Shoes />
      <div>
        <h1>Fetch Data</h1>
        <h4>{userData}</h4>
      </div>
    </div>
  );
}

export default App;
