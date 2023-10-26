import classNames from 'classnames';
import styles from './patient-home.module.scss';
import { Header } from '../header/header';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Patiet_blockinfo } from '../patiet-blockinfo/patiet-blockinfo';
import { Create_Patient } from '../create-patient/create-patient';

export interface Patient_HomeProps {
    className?: string;
    
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Patient_Home = ({ className }: Patient_HomeProps) => {
    return (
        <div>
            <Header />
            <div>
                <FullNavBar />
                <div className={classNames(styles.TrialsPageHeader, 'TrialOrg_Header', "padding")}>
                <h1>Patient</h1>
                <Create_Patient/></div>
                </div>
                 <div className="Trial_HomePage">
                    <Patiet_blockinfo
                    id="123"
                    firstName="[props.firstName]"
                    lastName="props.lastName"
                    gender="[props.gender]" 
                    dateOfBirth="[props.dateOfBirth]"
                    apartOf="[prop.trial (FK)"
                    />
                    <Patiet_blockinfo
                    id="123"
                    firstName="[props.firstName]"
                    lastName="props.lastName"
                    gender="[props.gender]" 
                    dateOfBirth="[props.dateOfBirth]"
                    apartOf="[prop.trial (FK)"
                    />
                    <Patiet_blockinfo
                    id="123"
                    firstName="[props.firstName]"
                    lastName="props.lastName"
                    gender="[props.gender]" 
                    dateOfBirth="[props.dateOfBirth]"
                    apartOf="[prop.trial (FK)"
                    />
                    <Patiet_blockinfo
                    id="123"
                    firstName="[props.firstName]"
                    lastName="props.lastName"
                    gender="[props.gender]" 
                    dateOfBirth="[props.dateOfBirth]"
                    apartOf="[prop.trial (FK)"
                    />
                    <Patiet_blockinfo
                    id="123"
                    firstName="[props.firstName]"
                    lastName="props.lastName"
                    gender="[props.gender]" 
                    dateOfBirth="[props.dateOfBirth]"
                    apartOf="[prop.trial (FK)"
                    />
            </div>
            </div>
    
        )
    }
