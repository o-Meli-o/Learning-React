import Card from "./Card";

function App() {

  return(
    <>
    <Card name="Meli" description="Just Trying To Learn React!"></Card>
    <Card name={20}></Card>
    <Card></Card>
    </>
    // if you check inspect there's a propType warning because of 20.
  );

}

export default App
