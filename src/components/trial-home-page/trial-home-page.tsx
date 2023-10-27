import classNames from 'classnames';
import { useEffect, useState } from 'react';
import styles from './trial-home-page.module.scss';
import { Header } from '../header/header';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Create_Patient } from '../create-patient/create-patient';
import { Create_NewTrial_Button } from '../create-new-trial-button/create-new-trial-button';
import { Trial_BlockInfo } from '../trial-block-info/trial-block-info';
import { Patiet_blockinfo } from '../patiet-blockinfo/patiet-blockinfo';
import { Trial_HomePage_Description } from '../trial-home-page-description/trial-home-page-description';
import { BrowserRouter, Routes, Route,Link, useParams} from 'react-router-dom';
import { Trial_HomePage_Overview } from '../trial-home-page-overview/trial-home-page-overview';
import { Trial_Observation } from '../trial-observation/trial-observation';
import PopTrigger from '../pop-trigger/pop-trigger';
import { fetchGet } from '../fetch/fetch';



export interface Trial_HomePageProps {
    className?: string;
}
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Trial_HomePage = ({ className }: Trial_HomePageProps) => {
    const [trials, setTrials] = useState([]);
    const trialGetUrl = 'http://localhost:8000/api/trials/'
    
    useEffect(() => {
        fetchGet(trialGetUrl, setTrials);
    }, [])
    
    const listTrials = trials.map(trial => 
        // <li>{contact.id} | {contact.name}</li>
        <Trial_BlockInfo key={trial['trialid']} id={trial['trialid']} context={trial['status']}/>
    )

    return (
        <div>
            <Header />
                <FullNavBar />
                <div className={classNames(styles.TrialsPageHeader, 'TrialOrg_Header', "padding")}>
                <h1>Trials</h1>
                <Create_NewTrial_Button/></div>
                <div className="Trial_HomePage">
                    {listTrials}
                </div>
            </div>
        )
};

