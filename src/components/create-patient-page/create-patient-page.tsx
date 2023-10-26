import classNames from 'classnames';
import styles from './create-patient-page.module.scss';
import { useState } from 'react';
import { Header } from '../header/header';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Input_Component } from '../input-component/input-component';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';

export interface CreatePatient_PageProps {
    className?: string;
}
function DateInput(props) {
  return (
    <InputMask 
      mask='99/99/9999' 
      value={props.value} 
      onChange={props.onChange}>
    </InputMask>
  );
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CreatePatient_Page = ({ className }: CreatePatient_PageProps) => {
    
    const [date, setDate] = useState('');
    const handleInput = ({ target: { value } }) => setDate(value);
    return <div>

        <Header />
        <FullNavBar />


        <div className="Add_Trial" style={{color:"#034370"}}>

            <h3>Add Patient</h3>  
            <div className="Add_Trial_Form">
               <Input_Component context="First Name " />
                <Input_Component context="Last Name " />
                <Input_Component context="Gender " />
                <div className="TrialOrg_Header" >
                  Date of Birth
                <DateInput
                    value={date} 
                    onChange={handleInput}
                    placeholder="Date of Birth: ">
                </DateInput></div>
                <Input_Component context="Participating in " /> 
            </div>
             <Link to="/home"> <button className="CreateTrialButton">Add Patient</button> </Link>
        </div>

    </div>;
};
