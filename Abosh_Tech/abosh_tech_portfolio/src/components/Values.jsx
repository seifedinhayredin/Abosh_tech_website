import { Stack } from "@mui/material"
import AddTaskIcon from '@mui/icons-material/AddTask';
export default function Values(){
    return (
        <div className="values">
            <h2 className="value_title">Values</h2>
            <Stack  direction="row" spacing={2}>
                <div className="value_item">
                             <div className="value_icon">
                        <AddTaskIcon fontSize="large"/>
                            </div>
                    Placing emphasis on the caliber of our output
                    </div>
                <div className="value_item">
                        <div className="value_icon">
                        <AddTaskIcon fontSize="large"/>
                        </div>
                    Fairly priced
                </div>
                <div className="value_item">
                <div className="value_icon">
                        <AddTaskIcon fontSize="large"/>
                    </div>
                    Submitting jobs within the alloted time, date, or pace
                </div>
                <div className="value_item">
                        <div className="value_icon">
                        <AddTaskIcon fontSize="large"/>
                        </div>
                    Carefully handling the needs of our customers
                </div>
                <div className="value_item">
                         <div className="value_icon">
                        <AddTaskIcon fontSize="large"/>
                         </div>
                    Dedicatedness
                </div>
                <div className="value_item">
                        <div className="value_icon">
                        <AddTaskIcon fontSize="large"/>
                         </div>
                    Encourage creativity
                </div>

            </Stack>


        </div>
    )
}