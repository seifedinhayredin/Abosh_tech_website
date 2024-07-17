import serviceElement from "./serviceElement"
import { Stack } from "@mui/material"

const chunkArray = (array, chunkSize) => {
    const results = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        results.push(array.slice(i, i + chunkSize));
    }
    return results;
};

export default function Service({items, itemsPerRow} ){
    if (!Array.isArray(items)) {
        return null;
    }
    const rows = chunkArray(items, itemsPerRow);
    console.log(items)
    
    // return (
    //     <div className="services">
    //         <Stack direction="row" spacing={2}>
    //         {
    //             serviceElement.map((item, index) => (
                   
    //                <div className="service_items">
    //                 <div>
    //                     <p>{item.photo}</p>
    //                     <p>{item.title} </p>
    //                     <p>{item.description}</p>
                        

    //                 </div>
                    
    //                </div>
    //             )
    //         )
    //     }
            
           
    //         </Stack>
    //     </div>
    // )
    return (
        <div className="services">
            <h2 className="service_title">Our Services</h2>
             <Stack direction="column" spacing={4}>
            {rows.map((row, rowIndex) => (
                <Stack key={rowIndex} direction="row" spacing={3}>
                    {row.map((item, index) => (
                        <div key={index} className="service_items">
                            <span className="service_items_photo">{item.photo}</span>
                            <h3 className="service_items_title">{item.title}</h3>
                            <p>{item.description}</p>
                            <br />
                        </div>
                    ))}
                </Stack>
            ))}
            </Stack>
        </div>
    );
}