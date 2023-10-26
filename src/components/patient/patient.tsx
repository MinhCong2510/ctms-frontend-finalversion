import classNames from 'classnames';
import styles from './patient.module.scss';
import { Header } from '../header/header';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';

export interface PatientProps {
    className?: string;

}
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Patient = ({ className }: PatientProps) => {
    
    return (
    <div>
        <Header />
        <div>
            <FullNavBar />
             <div className="Trial_HomePage_ContentBlock">
                <p>
                     <h3>First Name: </h3>
                     [First name props] 
                    <br/>
                    <h3>Last Name: </h3>
                    [Last name props]
                    <br/>
                    <h3>Gender: </h3>
                    [gender props]
                    <br/>
                    <h3>Date of Birth: </h3>
                    [date of birth props]
                    <br/>
                    <h3>Apart of: </h3> 
                    [trial ID props]
                    <br/>
                    <h3>Observations: </h3>
                    [observations with patient ID]
                </p>
        </div>
        </div>

    </div>
    )
}
