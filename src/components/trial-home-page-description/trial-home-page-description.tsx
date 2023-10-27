import classNames from 'classnames';
import styles from './trial-home-page-description.module.scss';
import { Observation_SummaryReport } from '../observation-summary-report/observation-summary-report';

export interface Trial_HomePage_DescriptionProps {
    className?: string;
    name?: string;
    description?: string;
    status?: string;
    dateCreated?: string;
    participants?: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Trial_HomePage_Description = ({ className, name, description, status, dateCreated,participants }: Trial_HomePage_DescriptionProps) => {
    return <div className="Trial_HomePage_Description">
    <p>
    <h3>Trial Name: </h3>
    {name}
    <br/>
    <h4>Number of participants: </h4>
    {participants}
    <br/>
    <h3>Description: </h3>
    {description}
    <br/>
    <h3>Status: </h3>
    {status}
    <br/>
    <h3>Start Date: </h3>
    {dateCreated}
    <br/>
    
</p>
</div>;
};
