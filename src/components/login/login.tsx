import classNames from 'classnames';
import './login.module.scss';
import { Link, Navigate } from 'react-router-dom';

export interface LoginProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Login = ({ className }: LoginProps) => {
    return <div className="Login">
        <h1 style={{color:"#ffffff"}}>Welcome to eHealth Clinical Trial</h1>

        <form style={{color:"white", fontSize:"20px"}}><label>Username/ Email:</label>
        <br />
        <input type="text" />
        <br />
        <label>Password</label>
        <br />
        <input type="password" />
        
        <br /><br />
        <button className="CreateTrialButton" id="login"><Link to='/home' >Login</Link></button>

        </form>
        
    </div>;
};