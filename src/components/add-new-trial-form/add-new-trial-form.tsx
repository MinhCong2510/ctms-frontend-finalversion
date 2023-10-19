import classNames from 'classnames';
import styles from './add-new-trial-form.module.scss';
import { Input_Component } from '../input-component/input-component';

export interface Add_NewTrial_FormProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Add_NewTrial_Form = ({ className }: Add_NewTrial_FormProps) => {
    return <div className="Add_Trial">
        <h3>Add New Trial</h3>
        <div className="Add_Trial_Form">
            <Input_Component context="Name " />
            <Input_Component context="Description"/>
            <Input_Component context="Sponsor by" />
            <Input_Component context="Create on" />

        </div>
        <button className="CreateTrialButton">Create New Trial</button></div>;
};
