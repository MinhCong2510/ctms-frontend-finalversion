import React from "react";

import { GenerateReport_button } from "../generate-report-button/generate-report-button";
import { Link } from "react-router-dom";


const PopUp=({open, onClose}) =>{
    if (!open) return null
        let date= new Date();
        let dateS=date.toLocaleDateString();
    return (
        <>
    <div className="popUpContainer">
        <div style={{padding:"25px",  transform:" translate(20%,-0%)"}}>
        <img src="https://aci.health.nsw.gov.au/__data/assets/image/0003/219369/aci-logo.png/"/>
        <text style={{position:"fixed",top:"8px",right:"-80px",color:"#ff0000"}} onClick={onClose}>x</text>
        <br/>
        <h2 style={{textAlign:"left"}}>Trial Ended on {dateS} <br/> Status: Completed<br/> Duration: [Duration]</h2>
        {/* Please replace [Duration] with actual duration.Maybe date() less dateCreated? */}
        <div><Link style={{textAlign:"center"}}to="/GenerateReport"><GenerateReport_button/></Link>
        </div>
        </div>
    </div >
    </>
    )
}

export default PopUp