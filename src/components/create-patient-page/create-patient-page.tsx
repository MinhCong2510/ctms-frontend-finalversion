import classNames from 'classnames';
import styles from './create-patient-page.module.scss';
import { useEffect, useState } from 'react';
import { Header } from '../header/header';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Input_Component } from '../input-component/input-component';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { fetchGet, fetchPost } from '../fetch/fetch';

export interface CreatePatient_PageProps {
    className?: string;
}
function DateInput(props) {
  return (
    <InputMask 
      mask='9999-99-99' 
      value={props.value} 
      onChange={props.onChange}
      id='dob'>
    </InputMask>
  );
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CreatePatient_Page = ({ className }: CreatePatient_PageProps) => {
    
    const [date, setDate] = useState('');
    const [trials, setTrials] = useState([]);
    const handleInput = ({ target: { value } }) => setDate(value);

    useEffect(() => {
      fetchGet('http://localhost:8000/api/trials/', setTrials);
  }, [])
    
    const listTrials = trials.map(trial => (
      <option value={trial['trialid']}>{trial['trialid']} | {trial['trialname']}</option>
    ))


    function createPatient()
    {
      try
      {
        fetchPost('http://localhost:8000/api/patients/', {
          firstname: (document.getElementById('firstname') as HTMLInputElement).value,
          lastname: (document.getElementById('lastname') as HTMLInputElement).value,
          m_gender: (document.getElementById('gender-select') as HTMLInputElement).value,
          dateofbirth: (document.getElementById('dob') as HTMLInputElement).value,
          trialid: (document.getElementById('trial-select') as HTMLInputElement).value,
        })

        const redirectUrl = '/patients/';
        // alert('Added new patient')
        // window.location.replace('/patients')S
      } catch(e)
      {
        alert('An error has occurred:' + e)
      }
    }
    return <div>

        <Header />
        <FullNavBar />


        <div className="Add_Trial" style={{color:"#034370"}}>

            <h3>Add Patient</h3>  
            <div className="Add_Trial_Form">
               <Input_Component context="First Name" id="firstname"/>
                <Input_Component context="Last Name" id="lastname"/>
                <div>
                Gender:
                <select name="Select Gender" id="gender-select">
                  <option value="1">Male</option>
                  <option value="0">Female</option>
                </select>
                </div>
                <div>
                Date of Birth:
                <input type='date' id='dob'>

                </input>
                </div>
                <div>
                Assign to trial: 
                <select  id="trial-select">
                  {listTrials}
                </select>
                </div>
                {/* <Input_Component context="Participating in " />  */}
            </div>
            <button className="CreateTrialButton" onClick={createPatient}>Add Patient</button>
        </div>

    </div>;
};
