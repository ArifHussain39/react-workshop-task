import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Rocket from "./components/Rocket";
import Missions from "./components/Missions";
import Profile from "./components/Profile";
import Darkmode from "darkmode-js";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "./redux/Store";


const darkmode = new Darkmode();
darkmode.showWidget();

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
