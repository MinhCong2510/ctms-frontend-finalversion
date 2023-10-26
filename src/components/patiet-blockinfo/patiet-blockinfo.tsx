import classNames from 'classnames';
import styles from './patiet-blockinfo.module.scss';
import { Link } from 'react-router-dom';
import { Delete_Button } from '../delete-button/delete-button';

export interface Patiet_blockinfoProps {
    className?: string;
    id?: string;
    firstName?: string;
    lastName?: string;
    gender?:string;
    dateOfBirth?: string;
    apartOf?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Patiet_blockinfo = ({ className , id, firstName, lastName, gender, dateOfBirth, apartOf}: Patiet_blockinfoProps) => {
    return (
        <>
        <Link to="/patientInfo">
        <div className="TrialOrg_BlockInfo">
       
        <h4>ID: {id}
        <br/>
        First Name: {firstName}
        <br/>
        Last Name:{lastName}
        <br/>
        Gender: {gender}
        <br/>
        Date of Birth: {dateOfBirth}
        <br/>
        Apart of: {apartOf}
        <div style={{textAlign:"right"}}><Delete_Button/></div>
        </h4>

    </div>
    </Link>
    </>
    );
};
