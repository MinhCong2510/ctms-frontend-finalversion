import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './home-page.module.scss';
import { Header } from '../header/header';
import { Trial_BlockInfo } from '../trial-block-info/trial-block-info';
import { Create_NewTrial_Button } from '../create-new-trial-button/create-new-trial-button';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Filter_Component } from '../filter-component/filter-component';
import { Create_NewTrialOrg_button } from '../create-new-trial-org-button/create-new-trial-org-button';
import { TrialOrg_BlockInfo } from '../trial-org-block-info/trial-org-block-info';
import { Add_NewTrial_Form } from '../add-new-trial-form/add-new-trial-form';
import { Add_TrialOrg_Form } from '../add-trial-org-form/add-trial-org-form';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { EndTrial_button } from '../end-trial-button/end-trial-button';
import { Patiet_blockinfo } from '../patiet-blockinfo/patiet-blockinfo';
import { Create_Patient } from '../create-patient/create-patient';

export interface HomePageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */



export const HomePage = ({ className }: HomePageProps) => {
    const [trials, setTrials] = useState([]);

    useEffect(() => {
        fetchTrials();
    }, [])
    
    function fetchTrials()
    {
        fetch('http://localhost:8000/api/trials/')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setTrials(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }

    const listTrials = trials.map(trial => 
        // <li>{contact.id} | {contact.name}</li>
        <Trial_BlockInfo key={trial['trialid']} id={trial['trialid']} context={trial['status']}/>
    )
    
    return <div >
        <Header />
        <FullNavBar />
        <div className="padding">
            <div className="TrialOrg_Header">
                <h1>Trials</h1>
                <Create_NewTrial_Button /> 
            </div>

            <div className="Trial_HomePage">
                {listTrials}
            </div>
            <div className={classNames(styles.TrialsPageHeader, 'TrialOrg_Header')}>
                <h1>Patients</h1>
               
                <Create_Patient />
                
            </div>
            <div className="Trial_HomePage">
                <Patiet_blockinfo  id="123" firstName="[props.firstName]" lastName="props.lastName" gender="[props.gender]" dateOfBirth="[props.dateOfBirth]"/>
                <Patiet_blockinfo  id="123" firstName="[props.firstName]" lastName="props.lastName" gender="[props.gender]" dateOfBirth="[props.dateOfBirth]"/>
            </div>
            <div className={classNames(styles.TrialsPageHeader, 'TrialOrg_Header')}>
            <h1>Trial Organization</h1>
                <Create_NewTrialOrg_button />
            </div>
            <div className="Trial_HomePage">
                <TrialOrg_BlockInfo name="ABC" id="123" contactNumber="02......" />
                <TrialOrg_BlockInfo name="DEF" id="456" contactNumber="02......" />
                <TrialOrg_BlockInfo name="GHI" id="789" contactNumber="02......" />
            </div>
            
        </div>
    </div>
};
