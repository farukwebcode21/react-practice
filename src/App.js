import { useEffect, useState } from "react";
import "./App.css";

// const loadCountries = () => {
//   fetch("https://restcountries.com/v3.1/all")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };
// loadCountries();

function App() {
  /*  const singers = [
    { name: "Rashel", job: "Singer" },
    { name: "Rana", job: "Square" },
    { name: "Ruma", job: "House Wife" },
    { name: "rima", job: "Hose wife" },
  ]; */

  return (
    <div className="App">
      <ExternalUser />
    </div>
  );
}

/* function Person(props) {
  // console.log(props);
  return (
    <div className="product">
      <h3>Name:{props.name}</h3>
      <p>Price:{props.job}</p>
    </div>
  );
} */

/* function Counter() {
  const [count, setCount] = useState(10);
  const increaseCount = () => setCount(count + 1);
  const dicreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={dicreaseCount}>Decrease</button>
    </div>
  );
} */

function ExternalUser() {
  const [users, setUser] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h1>External User</h1>
      <p>{users.length}</p>
      {users.map((user) => (
        <User name={user.name} email={user.email} phone={user.phone} />
      ))}
    </div>
  );
}
function User({ name, email, phone }) {
  return (
    <div className="container">
      <h3>Name:{name}</h3>
      <p>Email:{email}</p>
      <h2>{phone}</h2>
    </div>
  );
}
export default App;
