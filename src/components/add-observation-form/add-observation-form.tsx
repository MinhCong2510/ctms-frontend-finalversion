import classNames from 'classnames';
import styles from './add-observation-form.module.scss';
import { Input_Component } from '../input-component/input-component';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Header } from '../header/header';
import { HomePage } from '../home-page/home-page';
import { BrowserRouter, Routes, Route,Link} from 'react-router-dom';


export interface Add_Observation_FormProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Add_Observation_Form = ({ className }: Add_Observation_FormProps) => {
    return <div>
        <Header />

        <FullNavBar />
        <div className="Add_Trial">
            <h3>Add Observationl</h3>
            <div className="Add_Trial_Form">
                <Input_Component context="Name " />
                <Input_Component context="Description" />
                <Input_Component context="Lead Staff" />
                <Input_Component context="Involved Patients" />

            </div>
            <Link to="/home"><button className="CreateTrialButton">Create Observation</button> </Link>
        </div>

    </div>;
};
