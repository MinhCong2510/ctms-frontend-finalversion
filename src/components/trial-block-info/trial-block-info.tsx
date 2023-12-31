import classNames from 'classnames';
import styles from './trial-block-info.module.scss';
import { Link, useParams } from 'react-router-dom';
import { Delete_Button } from '../delete-button/delete-button';
import { useEffect, useState } from 'react';
import { fetchDelete } from '../fetch/fetch';

export interface Trial_BlockInfoProps {
    className?: string;
    id?: string;
    name?: string;
    context?: string;
    treatment?: string;
    participants?:string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Trial_BlockInfo = ({ className, id, name, context, treatment, participants}: Trial_BlockInfoProps) => {
    let trialLink = "/trials/" + id;
    
    return ( <div>

    <Link to={trialLink}>
    <div className="TrialOrg_BlockInfo">
        <h4>
        Trial number:{id} {/* number */}
        <br/>
        Trial: {name}
        <br/>
        Status:{context}
        {/* Recruiting/Completed/Terminate/Suspend */}
        </h4>
        </div>
    </Link>
        <div style={{textAlign:"right"}}><Delete_Button deleteFunc={() => {fetchDelete('http://localhost:8000/api/trials/', id)}}/></div>
    </div>
      )};
