import React, {useState} from "react";
import PopUp from "../pop-up/pop-up";


function PopTrigger(){
    const [openPopUp, setOpenPopUp] = useState(false)
    return(
        <div style={{textAlign:"center"}}>
            <button style={{textAlign:"right"}} className="CreateTrialButton" onClick={() => setOpenPopUp(true) }>
                Finish Trial
            </button>
            <PopUp open={openPopUp} onClose={()=>setOpenPopUp(false)}/>
        </div>
    )
}
export default PopTrigger