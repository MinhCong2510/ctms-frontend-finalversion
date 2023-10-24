import classNames from 'classnames';
import styles from './end-trial-button.module.scss';

export interface EndTrial_buttonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const EndTrial_button = ({ className }: EndTrial_buttonProps) => {
    return <div>
       <button className="CreateTrialButton">Finish Trial</button>
    </div>;
};
