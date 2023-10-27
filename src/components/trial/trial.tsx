import classNames from 'classnames';
import styles from './trial.module.scss';
import { Header } from '../header/header';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Trial_HomePage_Overview } from '../trial-home-page-overview/trial-home-page-overview';
import { Link, useParams } from 'react-router-dom';
import { Trial_HomePage_Description } from '../trial-home-page-description/trial-home-page-description';
import PopTrigger from '../pop-trigger/pop-trigger';
import { Trial_Observation } from '../trial-observation/trial-observation';
import { Observation_SummaryReport } from '../observation-summary-report/observation-summary-report';
import { AddObservation_Button } from '../add-observation-button/add-observation-button';
import { useEffect, useState } from 'react';
import { fetchGet } from '../fetch/fetch';

export interface TrialProps {
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
export const Trial = ({ className , id, status, name, participants}: TrialProps) => {
    let {trialId} = useParams(); // getting the trial id from the url
    const [info, setInfo] = useState([]); // state for storing trial informations
    const infoGetUrl = 'http://localhost:8000/api/trials/' + trialId + '/'; // defining a fetching url for getting the trial info
    
    const [patients, setPatients] = useState([]); // state for storing list of patients
    const patientGetUrl = 'http://localhost:8000/api/patients/';
    
    const [trialOrg, setTrialOrg] = useState([]);
    const orgGetUrl = 'http://localhost:8000/api/trialorgs/' + info['organisationid'] + '/';

    // when the page renders, get all the trial and patients from database
    useEffect(() => {
        fetchGet(infoGetUrl, setInfo);
        fetchGet(patientGetUrl, setPatients);
        
        setTimeout(() => fetchGet(orgGetUrl, setTrialOrg),500); // artificial 500ms delay to make sure info is available
    }, [])
    
    let patientCount = 0; // number of patients in the trial
    const listPatients = patients.map(patient => 
        {
            if (patient['trialid'] == trialId)
            {
                patientCount++;
            }
        }
    )
    
    return (
        <div>
            <Header />
            <div>
                <FullNavBar />
                <div className={classNames("Trial_HomePage_ContentBlock")}>
            </div>
            <div className="padding">
                <div className="Trial_HomePage_Description">
                        <p>
                        <h3>Trial Name: </h3>
                        {info['trialname']}
                        <br/>
                        <h3>Description: </h3>
                        {info['trialdescription']}
                        <br/>
                        <h3>Status: </h3>
                        {info['status']}
                        <br/>
                        <h3>Start Date: </h3>
                        {info['datecreated']}
                        <br/>
                        <br/>
                        <h3>Sponsor Organisation: </h3>
                        {trialOrg['organisationname']}
                        
                    </p>
                </div>
            <div className={classNames("TrialOrg_Header", "Trial_HomePage_Description")}>
            <h3 >Observations</h3>
                <AddObservation_Button/> 
            </div>
            <Observation_SummaryReport/>
        </div>
        </div>
            <PopTrigger />
            </div>
    
        )
    };
