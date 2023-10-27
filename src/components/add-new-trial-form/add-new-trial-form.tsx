import classNames from 'classnames';
import styles from './add-new-trial-form.module.scss';
import { Input_Component } from '../input-component/input-component';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Header } from '../header/header';
import {Link} from 'react-router-dom';
import { fetchGet, fetchPost } from '../fetch/fetch';
import { useEffect, useState } from 'react';

export interface Add_NewTrial_FormProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const Add_NewTrial_Form = ({ className }: Add_NewTrial_FormProps) => {
    const dateFormat= new Intl.DateTimeFormat("en", {
        timeStyle: "short",
        dateStyle: "short",
      });
    const date=dateFormat.format(Date.now());

    const [organisations, setOrganisations] = useState([]);

    useEffect(() => {
        fetchGet('http://localhost:8000/api/trialorgs/', setOrganisations)
    }, [])
    
    function addTrial()
    {
      fetchPost('http://localhost:8000/api/trials/', {
        trialname: (document.getElementById('name') as HTMLInputElement).value,
        trialdescription: (document.getElementById('desc') as HTMLInputElement).value,
        status: 'Ongoing',
        organisationid: (document.getElementById('org-select') as HTMLInputElement).value,
      })
      const redirectUrl = '/trials';
    //   window.location.replace(redirectUrl)
    }

    const orgOptions = organisations.map(organisation =>
            <option value={organisation['organisationid']}>{organisation['organisationname']}</option>
        )

    return <div>
        <Header />

        <FullNavBar />
        <div className="Add_Trial" style={{color:"#034370"}}>
            <h3>Add New Trial</h3>
            <div className="Add_Trial_Form">
                <Input_Component context="Name " id='name'/>
                <Input_Component context="Description" id='desc'/>
                <div>
                Status: 
                <select name="" id="status-select">
                    <option value="Finished">Finished</option>
                </select>
                </div>
                <div>
                Trial Organisation:
                <select name="" id="org-select">
                    {orgOptions}
                </select>
                <div className="TrialOrg_Header" >Created on:  {date}</div>
                </div>

            </div>
           <button className="CreateTrialButton" onClick={addTrial}>Create New Trial</button>
        </div>

    </div>;
};
