import classNames from 'classnames';
import styles from './trial-org-block-info.module.scss';
import { Delete_Button } from '../delete-button/delete-button';
import { fetchDelete } from '../fetch/fetch';

export interface TrialOrg_BlockInfoProps {
    className?: string;
    id?: string;
    name?: string;
    contactNumber?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TrialOrg_BlockInfo = ({ className, name, contactNumber, id }: TrialOrg_BlockInfoProps) => {
    return <div className="TrialOrg_BlockInfo">
        <h4>Organization - {name}
        <br/>
        ID: {id}
        <br/>
        Contact:{contactNumber}
        </h4>
        <div style={{textAlign:"right"}}><Delete_Button deleteFunc={() => {fetchDelete('http://localhost:8000/api/trialorgs/', id)}}/></div>
        
    </div>;
};
