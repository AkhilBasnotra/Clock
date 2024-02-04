import Heading from "./Heading";
import Moto from "./Moto";
import CurrentTime from "./CurrentTime";
import "./App.css";

function App() {
  return (
    <center className="mydiv">
      <Heading />
      <Moto />
      <CurrentTime />
    </center>
  );
}

export default App;
