import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Pricing from "./components/pricing/Pricing";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import Sidebar from "./components/sidebar/Sidebar";
import Testimonial from "./components/testimonial/Testimonial";
import './App.css';

function App() {
  return (
    <div>
      <Sidebar />
      <main className='main'>
        <Home/>
        <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
        <Pricing/>
        <Testimonial/>
        <Blog/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
