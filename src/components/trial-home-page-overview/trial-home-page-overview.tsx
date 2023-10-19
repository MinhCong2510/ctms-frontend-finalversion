import classNames from 'classnames';
import styles from './trial-home-page-overview.module.scss';

export interface Trial_HomePage_OverviewProps {
    className?: string;
    id?: string;
    status?: string;
    name?: string;
    participants?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Trial_HomePage_Overview = ({ className, id, status, name, participants }: Trial_HomePage_OverviewProps) => {
    return <div className="Trial_HomePage_Description">
        <h4>Trial  - {name}
            <br />
            ID: {id}
            <br />
            Status: {status}
            <br />
            Participants: {participants}
        </h4>

    </div>;
};
