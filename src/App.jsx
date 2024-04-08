import { Route, Routes } from "react-router-dom";
import Header from "./common/header/Header";
import Home from "./views/Home";
import Footer from "./common/footer/Footer";

const App = () => {
  return (
    <div className="w-full flex flex-col ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
