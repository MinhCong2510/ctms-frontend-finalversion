import React, {useState} from "react";
import PopUp from "../pop-up/pop-up";


function PopTrigger(){
    const [openPopUp, setOpenPopUp] = useState(false)
    return(
        <div style={{textAlign:"right", backgroundColor:"#ffffff"}}>
            <button className="CreateTrialButton" onClick={() => setOpenPopUp(true) }>
                Finish Trial
            </button>
            <PopUp open={openPopUp} onClose={()=>setOpenPopUp(false)}/>
        </div>
    )
}
export default PopTrigger