import { BrowserRouter } from "react-router-dom";
// import MainComponent from "./components/MainComponent";
import Main from "./routes/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
