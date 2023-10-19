import classNames from 'classnames';
import styles from './login.module.scss';

export interface LoginProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Login = ({ className }: LoginProps) => {
    return <div className="Login">
        <h1>Welcome to eHealth Clinical Trial</h1>

        <form><label>Username/ Email:</label>
        <br />
        <input type="text" />
        <br />
        <label>Password</label>
        <br />
        <input type="password" />
        
        <br /><br />
        <input type="submit" value="Login" className="CreateTrialButton" />
        
        
        </form>






    </div>;
};
