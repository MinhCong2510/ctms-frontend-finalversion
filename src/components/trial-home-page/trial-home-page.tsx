import classNames from 'classnames';
import { useEffect, useState } from 'react';
import styles from './trial-home-page.module.scss';
import { Header } from '../header/header';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Trial_HomePage_Description } from '../trial-home-page-description/trial-home-page-description';
import { BrowserRouter, Routes, Route,Link, useParams} from 'react-router-dom';
import { Trial_HomePage_Overview } from '../trial-home-page-overview/trial-home-page-overview';
import { Trial_Observation } from '../trial-observation/trial-observation';
import PopTrigger from '../pop-trigger/pop-trigger';



export interface Trial_HomePageProps {
    className?: string;
    id?: string;
    status?: string;
    name?: string;
    participants?: string;
}
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Trial_HomePage = ({ className, id, status, name, participants }: Trial_HomePageProps) => {
    const [info, setInfo] = useState([]); // state for storing trial informations
    const [patients, setPatients] = useState([]) // state for storing list of patients
    
    let {trialId} = useParams(); // getting the trial id from the url
    let patientCount = 0; // number of patients in the trial

    // when the page renders, get all the trial and patients from database
    useEffect(() => {
        fetchTrialInfo();
        fetchPatients();
    }, [])

    const fetchUrl = 'http://localhost:8000/api/trials/' + trialId + '/'; // defining a fetching url for getting the trial info


    function fetchTrialInfo()
    {
        fetch(fetchUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setInfo(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    function fetchPatients()
    {
        fetch('http://localhost:8000/api/patients/')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPatients(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    const listPatients = patients.map(patient => 
        {
            if (patient['trialid'] == trialId)
            {
                patientCount++;
            }
        }
    )

    console.log(patientCount)
    
    return (
    <div>
        <Header />
        <div>
            <FullNavBar />
             <div className="Trial_HomePage_ContentBlock">
                <Trial_HomePage_Overview
                name={info['trialname']}
                id={trialId}
                status={info['status']}
                participants={patientCount.toString()}/>
            <div>
                <Link to="/observations">    <button className="CreateTrialButton">Observation</button>  </Link>
                <button className="CreateTrialButton">Submission </button>
                <button className="CreateTrialButton">Trial record</button>
                <Link to="/GenerateReport"> <button className="CreateTrialButton">Generate report</button> </Link>
            </div>
            <h3>Trial Overview</h3>
            <p>{info['trialdescription']}</p>
            <h3>Trial Plan</h3>
            <p>[Insert trial plans include trial design and measurement]</p>
            <h3>Trial Measuring</h3>
            <p>[Insert trial measurement include trial outcome and timeframe]</p>
            <h3>Participants Criteria</h3>
            <p>[Insert participants eligible criteria and population]</p>
            <h3>Trial Organization - Collaborators</h3>
            <p>[Insert trial staffs and organizations involved within this trial.]</p>
            <h3>Contact - Location</h3>
            <p>[Insert the contact details, locations of the trial that conducting the study]</p>

        </div>
        <PopTrigger />
        </div>

    </div>
    )
};
