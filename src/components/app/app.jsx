import "./app.css";
import Main from "../../pages/main";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "../header/header";
import NotFound from "../../pages/notFound";
import PersonalData from "../../pages/personal-data";
import ScrollToTop from "../scroll-to-top/scroll-to-top";
import Footer from "../footer/footer";
import { useDispatch } from "react-redux";

function App() {
  const [pageWidth, setPageWidth] = useState(document.documentElement.scrollWidth);
  window.onresize = newPageSize;
  const dispatch = useDispatch();

  function newPageSize() {
    setTimeout(() => {
      changePageWidth();
      setPageWidth(document.documentElement.scrollWidth);
    }, 1000);
  }

  const changePageWidth = () => {
    dispatch({ type: "changePageWidth", payload: document.documentElement.scrollWidth });
  };

  return (
    <div className="App">
      <Header />
      <ScrollToTop height={0} />
      <Routes>
        <Route exact path="/" element={<Main pageWidth={pageWidth} />} />
        <Route exact path="/personal-data" element={<PersonalData />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer pageWidth={pageWidth} />
    </div>
  );
}

export default App;
