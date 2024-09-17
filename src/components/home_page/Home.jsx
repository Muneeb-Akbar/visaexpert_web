import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"
import Banner from "./Banner1"
import SearchSection from "./SearchSection"
import Services from "./Services"
import TravelPoint from "./TravelPoint"
import KeyFeatures from "./KeyFeatures"
import FeedBack from "./FeedBack"
import ContactForm from "./ContactForm"
import Banner2 from "./Banner2"

function Home() {
    return (
        <>
        <div className="px-6 md:px-[6vw]">

        </div>
        <Navbar/>
        <Banner/>
        <SearchSection/>
        <Banner2/>
        <Services/>
        <TravelPoint/>
        <KeyFeatures/>
        <FeedBack/>
        <ContactForm/>
        <Footer/>
        </>
    )
  }
  
  export default Home
  