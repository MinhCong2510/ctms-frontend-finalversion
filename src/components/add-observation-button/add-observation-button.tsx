import classNames from 'classnames';
import styles from './add-observation-button.module.scss';
import { Link } from 'react-router-dom';

export interface AddObservation_ButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AddObservation_Button = ({ className }: AddObservation_ButtonProps) => {
        return <div>
            <Link to="/addobservations"><button className="CreateTrialButton">Create New Observation</button></Link>
        </div>
    };