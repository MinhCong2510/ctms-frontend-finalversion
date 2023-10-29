import classNames from 'classnames';
import './login.module.scss';
import { Link, Navigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { RoleContext } from '../../RoleContext';
import { fetchGet } from '../fetch/fetch';

export interface LoginProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Login = ({ className }: LoginProps) => {
    const {role, setRole} = useContext(RoleContext);
    const [staffInfo, setStaffInfo] = useState([]);

    if (role != 0)
    {
        window.location.replace('/home')
    }

    async function fetchJson(url)
    {
        return fetch(url)
        .then((response)=>response.json())
        .then((responseJson)=>{return responseJson});
    }
    
    async function login()
    {
        const fetchUrl = 'http://localhost:8000/api/staffs/' + (document.getElementById('staffid') as HTMLInputElement).value + '/';
        const staffDetails = await fetchJson(fetchUrl)
        const password = (document.getElementById('password') as HTMLInputElement).value
        // setTimeout(() => fetchGet(fetchUrl, setStaffInfo), 2000)
        console.log(staffDetails)
        if (password == staffDetails.firstname)
        {
            setRole(staffDetails.privilegeid)
            console.log(role)
        } else
        {
            alert('Unable to login. Please try again')
        }
    }
    
    return <div className="Login">
        <h1 style={{color:"black"}}>Welcome to eHealth Clinical Trial</h1>

        <form style={{color:"whiblate", fontSize:"20px"}}>
        <label>Staff ID:</label>
        <br />
        <input type="text" id='staffid'/>
        <br />
        <label>Password</label>
        <br />
        <input type="password" id='password'/>
        
        <br /><br />
        <button type='button' className="CreateTrialButton" onClick={login}>Login</button>

        </form>
        
    </div>;
};