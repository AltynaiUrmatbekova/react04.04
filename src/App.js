import logo from "./logo.svg";
import "./App.css";
import Paragraps from "./Components/Paragraphs";

function App() {
  const veggies = ["Carrot", "Potato", "Strawberry", 500];
  const fruits = ["Lemon", "Watermelon", "Rasberry", "Apple"];

  const books = [
    {name: "Mango", color: "Red"},
    {name: "Apple", color: "Red"},
    {name: "Cherry", color: "Red"},
  ]

  const veggiesList = veggies.map((veggies) => {
    return <li>{veggies}</li>;
    
  });

  const booksList = books.map((book) => {
    <li>
      {book.name}: {book.color}
    </li>
  })
  return (
    <div className="App">
<h1>Hello world</h1>
{veggies} <br></br>
{fruits}
<ul>
  {veggiesList}
</ul>
<ul>
  {booksList}
</ul>
    </div>
  );
}

export default App;
