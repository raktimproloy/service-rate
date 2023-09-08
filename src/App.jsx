
import Navbar from "./components/navbar"
import HeroSection from "./components/home/heroSection"
import ExploreSection from "./components/home/exploreSection"
import ReviewSection from "./components/home/reviewSection"
import Blog from "./components/home/blogSection"
import AboutUs from "./components/home/aboutSection"
import Footer from "./components/footer"

function App() {

  return (
    <>
    <div style={{background: "#E9E7E7", color: "black"}}>
      <Navbar/>
      <HeroSection/>
      <ExploreSection/>
      <ReviewSection/>
      <AboutUs/>
      <Blog/>
      <Footer/>

    </div>
    </>
  )
}

export default App
