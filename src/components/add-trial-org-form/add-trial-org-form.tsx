import classNames from 'classnames';
import styles from './add-trial-org-form.module.scss';
import { Input_Component } from '../input-component/input-component';
import { Header } from '../header/header';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { HomePage } from '../home-page/home-page';

export interface Add_TrialOrg_FormProps {
    className?: string;

}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */



export const Add_TrialOrg_Form = ({ className }: Add_TrialOrg_FormProps) => {
    return <div>

        <Header />
        <FullNavBar />


        <div className="Add_Trial">

            <h3>Add Trial Organization</h3>
            <div className="Add_Trial_Form">
                <Input_Component context="Name " />
                <Input_Component context="Contact Number " />
                <Input_Component context="Sponsor for " />
                <Input_Component context="Location " />
            </div>
             <Link to="/HomePage"> <button className="CreateTrialButton">Add New Trial Organization</button> </Link>

        </div>

    </div>;
};
