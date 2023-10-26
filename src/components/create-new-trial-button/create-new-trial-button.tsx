import classNames from 'classnames';
import styles from './create-new-trial-button.module.scss';
import { Link } from 'react-router-dom';

export interface Create_NewTrial_ButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Create_NewTrial_Button = ({ className }: Create_NewTrial_ButtonProps) => {
    return <div>
        <Link to="/addtrial"><button className="CreateTrialButton">Create New Trial</button></Link>
    </div>
};
