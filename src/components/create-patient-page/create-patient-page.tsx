import classNames from 'classnames';
import styles from './create-patient-page.module.scss';
import { Header } from '../header/header';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Input_Component } from '../input-component/input-component';
import { Link } from 'react-router-dom';

export interface CreatePatient_PageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CreatePatient_Page = ({ className }: CreatePatient_PageProps) => {
    return <div>

        <Header />
        <FullNavBar />


        <div className="Add_Trial">

            <h3>Add Patient</h3>
            <div className="Add_Trial_Form">
                <Input_Component context="First Name " />
                <Input_Component context="Last Name " />
                <Input_Component context="Gender " />
                <Input_Component context="Date of Birth " />
                <Input_Component context="Participating in " />
            </div>
             <Link to="/home"> <button className="CreateTrialButton">Add Patient</button> </Link>

        </div>

    </div>;
};
