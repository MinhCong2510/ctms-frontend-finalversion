import classNames from 'classnames';
import styles from './trial-observation.module.scss';
import { Header } from '../header/header';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Trial_Observation_Block } from '../trial-observation-block/trial-observation-block';
import { BrowserRouter, Routes, Route,Link} from 'react-router-dom';
import { Add_Observation_Form } from '../add-observation-form/add-observation-form';

export interface Trial_ObservationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */







export const Trial_Observation = ({ className }: Trial_ObservationProps) => {
    return <div>
        <Header />
        <FullNavBar />
        <div className="TrialOrg_Header">
            <h1>Observation</h1>
           <Link to ="Add_Observation_Form"> <button className="CreateTrialButton">Add Observation</button> </Link>
        </div>
        <select>
        <option>Sort by</option>
        <option>Incompleted Status</option>
        <option>Completed Status</option>
        <option>Max to min number of patients</option>
        <option>Min to max number of patients</option>
        <option>Max to min number of staffs incharge</option>
        <option>Min to max number of staffs incharge</option>
        </select>
        <select>
        <option>Date</option>
        <option>within 1 months</option>
        <option>within 3 months</option>
        <option>within 6 months</option>
        <option>within 12 months</option>
        
        </select>

        <div className="Trial_Obs_List">
            <Trial_Observation_Block id="1" status="completed" staff="[Name]" patientsNum="[number]" overview="[brief description]" />
            <Trial_Observation_Block id="2" status="completed" staff="[Name]" patientsNum="[number]" overview="[brief description]" />
            <Trial_Observation_Block id="3" status="incompleted" staff="[Name]" patientsNum="[number]" overview="[brief description]" />
            <Trial_Observation_Block id="4" status="incompleted" staff="[Name]" patientsNum="[number]" overview="[brief description]" />

        </div>









    </div>;
};
