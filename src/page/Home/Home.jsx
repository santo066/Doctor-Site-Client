import Contact from "./Component/Contact";
import Contact_form from "./Component/Contact_form";
import Doctors_Card from "./Component/Doctors_Card";
import Hero from "./Component/Hero";
import Services from "./Component/Services";
import Testimonial from "./Component/Testimonial";

export default function Home(){
    return(
        <div>
            <Hero></Hero>
            <Services></Services>
            <Contact></Contact>
            <Testimonial></Testimonial>
            <Doctors_Card></Doctors_Card>
            <Contact_form></Contact_form>
        </div>
    )
}