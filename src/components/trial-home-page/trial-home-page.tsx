import classNames from 'classnames';
import { useState } from 'react';
import styles from './trial-home-page.module.scss';
import { Header } from '../header/header';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Create_Patient } from '../create-patient/create-patient';
import { Create_NewTrial_Button } from '../create-new-trial-button/create-new-trial-button';
import { Trial_BlockInfo } from '../trial-block-info/trial-block-info';
import { Patiet_blockinfo } from '../patiet-blockinfo/patiet-blockinfo';




export interface Trial_HomePageProps {
    className?: string;
}
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Trial_HomePage = ({ className }: Trial_HomePageProps) => {
    
    return (
        <div>
            <Header />
            
                <FullNavBar />
                <div className={classNames(styles.TrialsPageHeader, 'TrialOrg_Header', "padding")}>
                <h1>Trials</h1>
                <Create_NewTrial_Button/></div>
                
                 <div className="Trial_HomePage">
                    <Trial_BlockInfo
                    id="123"
                    name="[props.treatmentName]"
                    context="[props.status]"
                    treatment="[props.treatment]" 
                    participants="[props.participant]"
                    />
                    <Trial_BlockInfo
                    id="123"
                    name="[props.treatmentName]"
                    context="[props.status]"
                    treatment="[props.treatment]" 
                    participants="[props.participant]"
                    />
                    <Trial_BlockInfo
                    id="123"
                    name="[props.treatmentName]"
                    context="[props.status]"
                    treatment="[props.treatment]" 
                    participants="[props.participant]"
                    />
                    <Trial_BlockInfo
                    id="123"
                    name="[props.treatmentName]"
                    context="[props.status]"
                    treatment="[props.treatment]" 
                    participants="[props.participant]"
                    />
                    <Trial_BlockInfo
                    id="123"
                    name="[props.treatmentName]"
                    context="[props.status]"
                    treatment="[props.treatment]" 
                    participants="[props.participant]"
                    />
            </div>
            </div>
    
        )

};
