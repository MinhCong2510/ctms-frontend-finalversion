import classNames from 'classnames';
import styles from './staff-home.module.scss';
import { Header } from '../header/header';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Staff_BlockInfo } from '../staff-block-info/staff-block-info';

export interface StaffHomeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const StaffHome = ({ className }: StaffHomeProps) => {

    return (
        <div>
            <Header />
            
                <FullNavBar />
                <div className={classNames(styles.TrialsPageHeader, 'TrialOrg_Header', "padding")}>
                <h1>Staff</h1>
                </div>
                
                 <div className="Trial_HomePage">
                    <Staff_BlockInfo
                    id="123"
                    firstName="[props.firstName]"
                    lastName="[props.lastName]"
                    trialInvolved="[props.trialInvolved]" 
                    />
                    <Staff_BlockInfo
                    id="123"
                    firstName="[props.firstName]"
                    lastName="[props.lastName]"
                    trialInvolved="[props.trialInvolved]" 
                    />
                    <Staff_BlockInfo
                    id="123"
                    firstName="[props.firstName]"
                    lastName="[props.lastName]"
                    trialInvolved="[props.trialInvolved]" 
                    />
                    <Staff_BlockInfo
                    id="123"
                    firstName="[props.firstName]"
                    lastName="[props.lastName]"
                    trialInvolved="[props.trialInvolved]" 
                    />
                    <Staff_BlockInfo
                    id="123"
                    firstName="[props.firstName]"
                    lastName="[props.lastName]"
                    trialInvolved="[props.trialInvolved]" 
                    />
            </div>
            </div>
    
        )

};