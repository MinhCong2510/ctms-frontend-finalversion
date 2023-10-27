import classNames from 'classnames';
import styles from './patient.module.scss';
import { Header } from '../header/header';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { defineGender, fetchGet } from '../fetch/fetch';

export interface PatientProps {
    className?: string;

}
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Patient = ({ className }: PatientProps) => {
    let {patientId} = useParams(); // getting the trial id from the url
    const [info, setInfo] = useState([]); // state for storing trial informations
    const infoGetUrl = 'http://localhost:8000/api/patients/' + patientId + '/'; // defining a fetching url for getting the trial info

    useEffect(() => {
        fetchGet(infoGetUrl, setInfo);
    }, [])
    
    

    return (
    <div>
        <Header />
        <div>
            <FullNavBar />
             <div className="Trial_HomePage_ContentBlock">
                     <h3>First Name: </h3>
                    {info['firstname']}
                    <br/>
                    <h3>Last Name: </h3>
                    {info['lastname']}
                    <br/>
                    <h3>Gender: </h3>
                    {defineGender(info['m_gender'])}
                    <br/>
                    <h3>Date of Birth: </h3>
                    {info['dateofbirth']}
                    <br/>
                    <h3>Apart of: </h3> 
                    {info['trialid']}
                    <br/>
        </div>
        </div>

    </div>
    )
}
