import classNames from 'classnames';
import styles from './generate-report-button.module.scss';

export interface GenerateReport_buttonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const GenerateReport_button = ({ className }: GenerateReport_buttonProps) => {
    return <div>
       <button className="CreateTrialButton">Generate Report</button>
    </div>;
};
