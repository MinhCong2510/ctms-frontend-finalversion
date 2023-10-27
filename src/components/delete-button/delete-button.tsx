import classNames from 'classnames';
import styles from './delete-button.module.scss';
import { useContext } from 'react';
import { RoleContext } from '../../RoleContext';

export interface Delete_ButtonProps {
    className?: string;
    deleteFunc?: Function;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Delete_Button = ({ className, deleteFunc }: Delete_ButtonProps) => {
    const {role, setRole} = useContext(RoleContext)
    
    // console.log(role);
    // if (role>=2)

    // {
    return <div>
      <button className="CreateTrialButton" onClick={deleteFunc}>Delete</button>
    </div>;
    // }
    // else
    // {
    //   return null;  
    // }
};

