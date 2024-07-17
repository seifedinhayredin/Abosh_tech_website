import Header from "./Header"
import About from "./About"
import Mission from "./Mission"
import Vision from "./Vision"
import Values from "./Values"
import Contact from "./Contact"
import Service from "./Service"
import serviceElement from "./serviceElement"
export default function Main(){
    console.log(serviceElement)
    return (
        <>
        <div className="main_cont">
            <p className="main_par">Crafting Comfort, Elevating Spaces</p>
            <p className="main_sec_par">Choose Quality, Choose Us</p>
           
        </div>
        <About />
        <Vision />
        <Mission />
        <Service items = {serviceElement} itemsPerRow = {5}/>
        <Contact />
        
        </>
    )
}