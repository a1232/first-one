import Toolbar from "../component/navigation/toolbar/toolbar";
import Banner from "../component/pageComponent/Banner/Banner";
import Layout from "../HOC/layout/layout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout />
      <Banner />
    </div>
  );
}

export default App;
