import classNames from 'classnames';
import styles from './trial-home-page-description.module.scss';

export interface Trial_HomePage_DescriptionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Trial_HomePage_Description = ({ className }: Trial_HomePage_DescriptionProps) => {
    return <div className="Trial_HomePage_Description">

        <h3>Trial Overview</h3>
        <p>[Insert trial full description included brief summary and detailed description]</p>
        <h3>Trial Plan</h3>
        <p>[Insert trial plans include trial design and measurement]</p>
        <h3>Trial Measuring</h3>
        <p>[Insert trial measurement include trial outcome and timeframe]</p>
        <h3>Participants Criteria</h3>
        <p>[Insert participants eligible criteria and population]</p>
        <h3>Trial Organization - Collaborators</h3>
        <p>[Insert trial staffs and organizations involved within this trial.]</p>
        <h3>Contact - Location</h3>
        <p>[Insert the contact details, locations of the trial that conducting the study]</p>


    </div>;
};
