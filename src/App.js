import Layout from "./layout";
import HomePage from "./homepage";
import Courses from "./courses";
import ContactUs from "./contactus";
import AboutUs from "./aboutus";
import Faqs from "./Faqs";
import Signin from "./Signin";
import SignUp from "./signup";

function App() {
  return (
    <div className="App">
        <Layout>
          <HomePage/>
          <Courses/>
          <AboutUs/>
          <ContactUs/>
          <Faqs/>
          <Signin/>
          <SignUp/>
        </Layout>
    </div>
  );
}

export default App;
