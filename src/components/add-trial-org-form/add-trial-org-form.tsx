import classNames from 'classnames';
import styles from './add-trial-org-form.module.scss';
import { useState } from 'react';
import { Input_Component } from '../input-component/input-component';
import { Header } from '../header/header';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import {Link} from 'react-router-dom';
import InputMask from 'react-input-mask';
import { fetchPost } from '../fetch/fetch';

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
        onChange={props.onChange}
        id='phone-number'>
      </InputMask>
    );
  }

export const Add_TrialOrg_Form = ({ className }: Add_TrialOrg_FormProps) => {
    const [phone, setPhone] = useState('');
    const handleInput = ({ target: { value } }) => setPhone(value);

    function addTrialOrg()
    {
      fetchPost('http://localhost:8000/api/trialorgs/', {
        organisationname: (document.getElementById('name') as HTMLInputElement).value,
        contactnumber: (document.getElementById('phone-number') as HTMLInputElement).value
      })
      const redirectUrl = '/organisations';
      window.location.replace(redirectUrl)
    }
    return <div>

        <Header />
        <FullNavBar />


        <div className="Add_Trial">

            <h3>Add Trial Organization</h3>
            <div className="Add_Trial_Form">
                <Input_Component context="Name " id="name"/>
                <div className="TrialOrg_Header" >
                  Contact Number: 
                <PhoneInput
                    value={phone} 
                    onChange={handleInput}>
                </PhoneInput></div>
            </div>
            <button className="CreateTrialButton" onClick={addTrialOrg}>Add New Trial Organization</button>
        </div>

    </div>;
};
