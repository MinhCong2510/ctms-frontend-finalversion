import classNames from 'classnames';
import styles from './observation-summary-report.module.scss';
import { useEffect, useState } from 'react';
import { fetchGet } from '../fetch/fetch';

export interface Observation_SummaryReportProps {
    className?: string;
    id?:string;
    date?: string;
    treatment?: string;
    staff?: string;


}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Observation_SummaryReport = ({ className, id, date, treatment, staff }: Observation_SummaryReportProps) => {
    
    const staffGetUrl = 'http://localhost:8000/api/staffs/' + staff + '/';
    
    const [staffInfo, setStaff] = useState([]);
    
    useEffect(() => {
        fetchGet(staffGetUrl, setStaff);
    }, [])
    
    return <div className="Trial_Obs_ViewReport">
    <div className="observation_BlockInfo">
            <div className="Trial_HomePage_Description"> 
               
                Date of report: {date}
                <br />
                Treatment: {treatment}
                <br />
                Recorded by: {staffInfo['firstname'] + " " + staffInfo['lastname']}
                <br/>
            
            </div></div>
    
    </div>;
};
