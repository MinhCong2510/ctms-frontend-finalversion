import classNames from 'classnames';
import styles from './create-new-trial-org-button.module.scss';
import {Link} from 'react-router-dom';

export interface Create_NewTrialOrg_buttonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Create_NewTrialOrg_button = ({ className }: Create_NewTrialOrg_buttonProps) => {
    return <div>
       <Link to="/addorganisation"> <button className="CreateTrialButton">Add New Trial Organization</button></Link>
    </div>;
};
