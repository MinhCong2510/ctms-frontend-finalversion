import classNames from 'classnames';
import styles from './add-observation-form.module.scss';
import { Input_Component } from '../input-component/input-component';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Header } from '../header/header';
import { HomePage } from '../home-page/home-page';
import { BrowserRouter, Routes, Route,Link, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchGet, fetchPost } from '../fetch/fetch';


export interface Add_Observation_FormProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Add_Observation_Form = ({ className }: Add_Observation_FormProps) => {
    const fetchUrl = 'http://localhost:8000/api/observations/'
    let {trialId} = useParams()
    
    const [staffs, setStaffs] = useState([]);
    const [patients, setPatients] = useState([]);
    
    useEffect(() => {
        fetchGet('http://localhost:8000/api/staffs/', setStaffs);
        fetchGet('http://localhost:8000/api/patients/', setPatients);
    }, [])
    
    const dateFormat= new Intl.DateTimeFormat("en", {
        timeStyle: "short",
        dateStyle: "short",
      });
    const date=dateFormat.format(Date.now()); 

    const listPatients = patients.map(patient => (
        <option value={patient['patientid']}>{patient['patientid']} | {patient['firstname']} {patient['lastname']}</option>
    ))

    const listStaffs = staffs.map(staff =>
        <option value={staff['staffid']}>{staff['staffid']} | {staff['firstname']} {staff['lastname']}</option>
        )

    
    function createObservations()
    {
        fetchPost(fetchUrl, {
            description: (document.getElementById('description-text') as HTMLInputElement).value,
            staffid: (document.getElementById('staff-select') as HTMLInputElement).value,
            patientid: (document.getElementById('patient-select') as HTMLInputElement).value,
            treatment: (document.getElementById('treatment-text') as HTMLInputElement).value,
            trialid: trialId
        })
        const redirectUrl = '/trials/'+trialId;
        // window.location.replace(redirectUrl)
    }

    return <div>
        <Header />

        <FullNavBar />
        <div className="Add_Trial" style={{color:"#034370"}}>
            <h3>Add Observation</h3>
            <div className="Add_Trial_Form">
                <Input_Component context="Description " id='description-text'/>
                {/* <Input_Component context="Recorded by " id='staff-text'/> */}
                <select id='patient-select'>
                    {listPatients}
                </select>
                <select id='staff-select'>
                    {listStaffs}
                </select>

                {/* <Input_Component context="Patient" id='patient-text'/>
                <Input_Component context="Trial" id='trial-text'/> */}
                <Input_Component context="Treatment" id='treatment-text'/>
                <div className="TrialOrg_Header" >Created on:  {date}</div>

            </div>
            <button className="CreateTrialButton" onClick={createObservations}>Create Observation</button>
        </div>

    </div>;
};
