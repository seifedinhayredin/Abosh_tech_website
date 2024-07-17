import { Collapse, Stack } from "@mui/material"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
export default function Mission(){
    return (
        <div className="mission">
            <h2 className="mission_title">Mission</h2>
            <Stack direction="row" spacing={3}>
                <div className="mission_items">
                    <div class="icon-container">
                    <ArrowCircleDownIcon  fontSize="large"/>
                    </div>
                To develop workers with a purpose who are qualified interms of their proffession,
                knowledge and skills by preparing and training trainees in a module 
                </div>
                <div className="mission_items">
                <div class="icon-container">
                    <ArrowCircleDownIcon  fontSize="large"/>
                    </div>
                To create a working family by charging a fair price for superior products and services
                </div>
                <div className="mission_items">
                <div class="icon-container">
                    <ArrowCircleDownIcon  fontSize="large"/>
                    </div>
                Generating fantastic opportunities for our partners, suppliers, and client
                </div>

                <div className="mission_items">
                <div class="icon-container">
                    <ArrowCircleDownIcon  fontSize="large"/>
                    </div>
                Delivering steady and sustainable growth, growing the foreign market, and increasing our market share 
                globally with excellent goods and services
                </div>

                <div className="mission_items">
                <div class="icon-container">
                    <ArrowCircleDownIcon  fontSize="large"/>
                    </div>
                Producing and selling low-profit works in large quantities
                </div>
                <div className="mission_items">
                <div class="icon-container">
                    <ArrowCircleDownIcon  fontSize="large"/>
                    </div>
                Going along seventen sustainable development goals agenda
                </div>

            </Stack>

            </div>
    )
}