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
import { fetchGet, fetchPut } from '../fetch/fetch';

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
    

    const [observations, setObservations] = useState([]);
    const obsGetUrl = 'http://localhost:8000/api/observations/'

    // when the page renders, get all the trial and patients from database
    useEffect(() => {
        fetchGet(infoGetUrl, setInfo);
        fetchGet(patientGetUrl, setPatients);
        fetchGet(obsGetUrl, setObservations);
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

    function finishTrial()
    {
        fetchPut('http://localhost:8000/api/trials/', trialId, {
            trialname: info['trialname'],
            trialdescription: info['trialdescription'],
            organisationid: info['organisationid'],
            status: 'Finished',
        })
    }
    
    const listObservations = observations
    .filter((observation) => observation['trialid'] == trialId)
    .map(observation => 
        { 
            console.log(observation)
            return<Observation_SummaryReport date={observation['date']} treatment={observation['treatment']} staff={observation['staffid']}/>
        })
        console.log(listObservations)
    
    return (
        <div>
            <Header />
            <div>
                <FullNavBar />
                <div className={classNames("Trial_HomePage_ContentBlock")}>
            </div>
            <div className="padding">
                <Trial_HomePage_Description name={info['trialname']} description={info['trialdescription']} status={info['status']} dateCreated={info['datecreated']} participants={patientCount}/>
            <div className={classNames("TrialOrg_Header", "Trial_HomePage_Description")}>
            <h3 >Observations</h3>
                <AddObservation_Button/> 
            </div>
            {listObservations}
        </div>
        </div>
            <div onClick={finishTrial}>
                
            <PopTrigger/>
            </div>
            </div>
        )
    };
