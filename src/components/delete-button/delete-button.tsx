import classNames from 'classnames';
import styles from './delete-button.module.scss';

export interface Delete_ButtonProps {
    className?: string;
    deleteFunc?: Function;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Delete_Button = ({ className, deleteFunc }: Delete_ButtonProps) => {
    return <div>
      <button className="CreateTrialButton" onClick={deleteFunc}>Delete</button>
    </div>;
};

