import classNames from 'classnames';
import styles from './trial-org-block-info.module.scss';

export interface TrialOrg_BlockInfoProps {
    className?: string;
    name?: string;
    id?: string;
    location?:string;
    contactNumber?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TrialOrg_BlockInfo = ({ className, name, contactNumber, id,location }: TrialOrg_BlockInfoProps) => {
    return <div className="TrialOrg_BlockInfo">
        <img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg"
            style={{
                paddingRight: '10px',
                paddingLeft: '10px',
                height: 150,
                width: 150,
                objectFit: 'cover',
            }} />
        <h4>Organization - {name}
        <br/>
        ID: {id}
        <br/>
        Contact:{contactNumber}
        <br/>
        Location: {location}
        </h4>
        
    </div>;
};
