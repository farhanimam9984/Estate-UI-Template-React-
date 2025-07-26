// import React from "react";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Testimonials from "./components/Testimonials";
// import { Route, Routes } from "react-router-dom";

// import Singup from "./components/Singup";

// const App = () => {
//   return (
//     <>

//       <div className="w-full overflow-hidden">
//         <Header />
//         <Routes>
//           <Route path="/singup" element={<Singup/>}/>
//         </Routes>
//         <About />
//         <Projects />
//         <Testimonials />
//         <Contact />
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default App;

import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import Singup from "./components/Singup";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      
      <Routes>
        {/* Main page route (everything shown here) */}
        <Route
          path="/"
          element={
            <>
            <Header />
              <About />
              <Projects />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Signup route (ONLY SignUp shown here) */}
        <Route path="/singup" element={<Singup />} />
        <Route path="/" element={<Header/>}/>
      </Routes>
    </div>
  );
};

export default App;
