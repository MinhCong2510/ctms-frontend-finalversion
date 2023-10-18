import classNames from 'classnames';
import styles from './add-trial-org-form.module.scss';
import { Input_Component } from '../input-component/input-component';

export interface Add_TrialOrg_FormProps {
    className?: string;

}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Add_TrialOrg_Form = ({ className }: Add_TrialOrg_FormProps) => {
    return <div >
        <h3>Add Trial Organization</h3>
        <div>
            <Input_Component context="Name " />
            <Input_Component context="Contact Number " />
        </div>
        <button className="CreateTrialButton">Add</button>



    </div>;
};
