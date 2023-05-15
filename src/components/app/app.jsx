import "./app.css";
import Main from "../../pages/main";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../header/header";
import NotFound from "../../pages/notFound";
import Send from "../../pages/send";
import PersonalData from "../../pages/personal-data";
import ScrollToTop from "../scroll-to-top/scroll-to-top";
import Footer from "../footer/footer";

function App() {
  const [pageWidth, setPageWidth] = useState(document.documentElement.scrollWidth);
  //   const location = useLocation();
  window.onresize = newPageSize;

  function newPageSize() {
    setTimeout(() => {
      setPageWidth(document.documentElement.scrollWidth);
    }, 1000);
  }

  useEffect(() => {
    console.log(pageWidth);
  }, [pageWidth]);
  return (
    <div className="App">
      <Header pageWidth={pageWidth} />
      <ScrollToTop height={0} />
      <Routes>
        <Route exact path="/" element={<Main pageWidth={pageWidth} />} />
        <Route exact path="/send" element={<Send />} />
        <Route exact path="/personal-data" element={<PersonalData />} />
        {/* <Route
          path={!location === "/notfound" || "/denied" || "/sucsess"}
          element={<Navigate replace exact path="/" />}
        /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer pageWidth={pageWidth} />
      {/* <Copyright /> */}
    </div>
  );
}

export default App;
