import classNames from 'classnames';
import styles from './observation-summary-report.module.scss';

export interface Observation_SummaryReportProps {
    className?: string;
    id?:string;

}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Observation_SummaryReport = ({ className, id }: Observation_SummaryReportProps) => {
    return <div className="Trial_Obs_ViewReport">
    <div className="TrialOrg_BlockInfo">
            <img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg"
                style={{
                    paddingRight: '10px',
                    paddingLeft: '10px',
                    height: 150,
                    width: 150,
                    objectFit: 'cover',
                }} />
            <h4> Observation - {id}
                <br />
                Date of report: [insert the date this report created]
                <br />
                Duration- [insert the amount of time this observation carry out]
                <br />
                Lead Staff- [insert lead staff information]
                <br />
                Primary Outcome- [insert a full description of the observation outcome]
                <br/>
                References- [insert trial references]

            
            </h4></div>
    
    </div>;
};
