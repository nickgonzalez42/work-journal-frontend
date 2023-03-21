import { Content } from "./Content";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
