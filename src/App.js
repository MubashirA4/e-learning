import Layout from "./layout";
import HomePage from "./Pages/homepage/index"
import Courses from "./Pages/courses";
import ContactUs from "./Pages/contactus";
import AboutUs from "./Pages/aboutus";
import Faqs from "./Pages/Faqs";
import Signin from "./Pages/Signin";
import SignUp from "./Pages/signup";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Layout>
            <Routes>
              <Route path="/" exact element={ <HomePage/>} />
              <Route path="/courses" exact element={ <Courses/>} />
              <Route path="/about_us" exact element={ <AboutUs/>} />
              <Route path="/contact_us" exact element={<ContactUs/>} />
              <Route path="/faqs" exact element={ <Faqs/>} />
              <Route path="/sign_in" exact element={<Signin/>} />
              <Route path="/sign_up" exact element={ <SignUp/>} />           
          </Routes>
        </Layout>
    </div>
  );
}

export default App;
