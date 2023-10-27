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

    function login()
    {
        const fetchUrl = 'http://localhost:8000/api/staffs/' + (document.getElementById('staffid') as HTMLInputElement).value + '/';
        const password = (document.getElementById('password') as HTMLInputElement).value
        fetchGet(fetchUrl, setStaffInfo)
        
        if (password == staffInfo['firstname'])
        {
            setRole(staffInfo['privilegeid'])
            console.log(role)
        }
    }
    
    return <div className="Login">
        <h1 style={{color:"#ffffff"}}>Welcome to eHealth Clinical Trial</h1>

        <form style={{color:"white", fontSize:"20px"}}>
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