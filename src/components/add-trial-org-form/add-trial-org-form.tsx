import classNames from 'classnames';
import styles from './add-trial-org-form.module.scss';
import { useState } from 'react';
import { Input_Component } from '../input-component/input-component';
import { Header } from '../header/header';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import {Link} from 'react-router-dom';
import InputMask from 'react-input-mask';

export interface Add_TrialOrg_FormProps {
    className?: string;

}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

function PhoneInput(props) {
    return (
      <InputMask 
        mask='9999999999' 
        value={props.value} 
        onChange={props.onChange}>
      </InputMask>
    );
  }

export const Add_TrialOrg_Form = ({ className }: Add_TrialOrg_FormProps) => {
    const [phone, setPhone] = useState('');
    const handleInput = ({ target: { value } }) => setPhone(value);
    return <div>

        <Header />
        <FullNavBar />


        <div className="Add_Trial">

            <h3>Add Trial Organization</h3>
            <div className="Add_Trial_Form">
                <Input_Component context="Name " />
                <div className="TrialOrg_Header" >
                  Contact Number: 
                <PhoneInput
                    value={phone} 
                    onChange={handleInput}>
                </PhoneInput></div>
                <Input_Component context="Sponsor for " />
            </div>
             <Link to="/home"> <button className="CreateTrialButton">Add New Trial Organization</button> </Link>

        </div>

    </div>;
};
