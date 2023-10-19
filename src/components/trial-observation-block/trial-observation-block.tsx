import classNames from 'classnames';
import styles from './trial-observation-block.module.scss';

export interface Trial_Observation_BlockProps {
    className?: string;
    id?: string;
    overview?: string;
    patientsNum?: string;
    status?:string;
    staff?: string


}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Trial_Observation_Block = ({ className, id, overview, patientsNum, status, staff }: Trial_Observation_BlockProps) => {
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
                Status- {status}
                <br />
                Lead Staff: {staff}
                <br />
                Number of patients: {patientsNum}
                <br />
                Overview:{overview}
            </h4></div>
        <button className="CreateTrialButton">View report</button>
    </div>

        ;
};
