import classNames from 'classnames';
import styles from './create-patient.module.scss';
import { Link } from 'react-router-dom';

export interface Create_PatientProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Create_Patient = ({ className }: Create_PatientProps) => {
    return <div>
        <Link to="/addPatient"><button className="CreateTrialButton">Add New Patient</button></Link>
    </div>;
};
