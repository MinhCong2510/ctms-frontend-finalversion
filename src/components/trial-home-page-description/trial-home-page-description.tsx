import classNames from 'classnames';
import styles from './trial-home-page-description.module.scss';
import { Observation_SummaryReport } from '../observation-summary-report/observation-summary-report';

export interface Trial_HomePage_DescriptionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Trial_HomePage_Description = ({ className }: Trial_HomePage_DescriptionProps) => {
    return <div className="Trial_HomePage_Description">

                    <p>
                     <h3>Trial Name: </h3>
                     [Trial name props] 
                    <br/>
                    <h3>Description: </h3>
                    [Description props]
                    <br/>
                    <h3>Status: </h3>
                    [status props]
                    <br/>
                    <h3>Start Date: </h3>
                    [startDate props]
                    <br/>
                    <h3>Treatment used: </h3> 
                    [treatment props]
                    <br/>
                    <h3>Sponsor Organisation: </h3>
                    [organisation props]
                    
                </p>
    </div>;
};
