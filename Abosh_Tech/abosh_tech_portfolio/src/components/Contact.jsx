import { Stack } from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PanoramaFishEyeTwoToneIcon from '@mui/icons-material/PanoramaFishEyeTwoTone';
import contactElement from "./contactElement"
export default function Contact(){
    //const contactElements = contactElement.map(element => <p className="contact_items">{element}</p>)
    //console.log(contactElement[0]['phone'])
    return (
        <div className="contact">
            <div className="contact_title">Contact Us</div>
            <div className="contact_cont">
            <Stack direction="row" spacing={23}>
                
                <div className="contact_items">
                    <div className="contact_icon">
                        <span className="contact_icon_circle"><PhoneIcon fontSize="large" /></span>
                    
                      <span className="contact_icon_text">Call Us</span>
                    </div>
                    
                    <span className="contact_value">{contactElement[0]['phone']}</span>

                </div>
                <div className="contact_items">
                    <div className="contact_icon">
                        <span className="contact_icon_circle"> <EmailIcon fontSize="large" /></span>
                   
                    <span className="contact_icon_text">Email Us</span>
                    </div>
                   
                    <span className="contact_value">{contactElement[0]['email']}</span>
                    </div>
                <div className="contact_items">
                    <div className="contact_icon"> 
                    <span className="contact_icon_circle"><LocationOnIcon fontSize="large" /></span>
                    
                    <span className="contact_icon_text">Address</span>
                    </div>
                    
                    <span className="contact_value">{contactElement[0]['address']}</span>
                    </div>
                </Stack>
                </div>
            
           
        
        </div>
         
    )
}