import classNames from 'classnames';
import styles from './trial.module.scss';
import { Header } from '../header/header';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Trial_HomePage_Overview } from '../trial-home-page-overview/trial-home-page-overview';
import { Link } from 'react-router-dom';
import { Trial_HomePage_Description } from '../trial-home-page-description/trial-home-page-description';
import PopTrigger from '../pop-trigger/pop-trigger';
import { Trial_Observation } from '../trial-observation/trial-observation';
import { Observation_SummaryReport } from '../observation-summary-report/observation-summary-report';
import { AddObservation_Button } from '../add-observation-button/add-observation-button';

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
    return (
        <div>
            <Header />
            <div>
                <FullNavBar />
                <div className={classNames("Trial_HomePage_ContentBlock", "padding")}>
            </div>
            
            <Trial_HomePage_Description/>
            <div className={classNames("TrialOrg_Header", "Trial_HomePage_Description")}>
            <h3 >Observations</h3>
                <AddObservation_Button/> 
            </div>
            <Observation_SummaryReport/>
        </div>
            <PopTrigger />
            </div>
    
        )
    };
