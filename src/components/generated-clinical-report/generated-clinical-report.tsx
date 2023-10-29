import classNames from 'classnames';
 import { Trial_HomePage_Overview } from '../trial-home-page-overview/trial-home-page-overview';
import { Trial_HomePage_Description } from '../trial-home-page-description/trial-home-page-description';
import { Observation_SummaryReport } from '../observation-summary-report/observation-summary-report';
import { Trial } from '../trial/trial';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchGet } from '../fetch/fetch';

export interface Generated_ClinicalReportProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */





export const Generated_ClinicalReport = ({ className }: Generated_ClinicalReportProps) => {
    const {trialId} = useParams();
    const [trialInfo, setTrialInfo] = useState([]);

    const fetchUrl = 'http://localhost:8000/api/trials/' + trialId + '/';
    
    const [observations, setObservations] = useState([]);
    const obsGetUrl = 'http://localhost:8000/api/observations/'

    const [patients, setPatients] = useState([]); // state for storing list of patients
    const patientGetUrl = 'http://localhost:8000/api/patients/';

    useEffect(() => {
        fetchGet(fetchUrl, setTrialInfo);
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

    const listObservations = observations
        .filter((observation) => observation['trialid'] == trialId)
        .map(observation => 
            <Observation_SummaryReport date={observation['date']} treatment={observation['treatment']} staff={observation['staffid']} />
            )
      
    
    return <div>
        <div style={{margin:"20px"}}>
            <img src="https://aci.health.nsw.gov.au/__data/assets/image/0003/219369/aci-logo.png"/>
            {/* Please replace [Trial Name] with heading of the trial from database] */}
            <h1>{trialInfo['trialname']}'s Clinical Trial Report</h1>
            <Trial_HomePage_Description name={trialInfo['trialname']} description={trialInfo['trialdescription']} status={trialInfo['status']} dateCreated={trialInfo['datecreated']} participants={patientCount}/>
            <h3 className="Trial_HomePage_Description">Observations</h3>
            {listObservations}
        </div>
    </div>;
};
function useStates(arg0: never[]): [any, any] {
    throw new Error('Function not implemented.');
}

