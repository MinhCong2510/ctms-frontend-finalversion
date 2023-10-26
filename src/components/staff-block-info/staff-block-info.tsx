import classNames from 'classnames';
import styles from './staff-block-info.module.scss';

export interface Staff_BlockInfoProps {
    className?: string;
    id?:string;
    firstName?:string;
    lastName?:string;
    trialInvolved?:string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Staff_BlockInfo = ({ className, id, firstName, lastName ,trialInvolved }: Staff_BlockInfoProps) => {
    return (
        <div className="TrialOrg_BlockInfo">
            <h4>
            Staff ID: {id}
            <br/>
            First Name: {firstName}
            <br/>
            Last Name:{lastName}
            <br/>
            Trial Involved: {trialInvolved}
            <br/>
            {/* Recruiting/Completed/Terminate/Suspend */}
            </h4>
    
        </div>
        )
    };