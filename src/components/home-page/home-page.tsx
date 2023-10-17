import classNames from 'classnames';
import styles from './home-page.module.scss';
import { Header } from '../header/header';
import { Trial_BlockInfo } from '../trial-block-info/trial-block-info';
import { Create_NewTrial_Button } from '../create-new-trial-button/create-new-trial-button';

export interface HomePageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */



export const HomePage = ({ className }: HomePageProps) => {
    return <div >
        <Header />
        <h2>Trials</h2>
        <Create_NewTrial_Button />
        <br/>
        <div className="Trial_HomePage">
            <Trial_BlockInfo id="1" context="Recruiting" />
            <Trial_BlockInfo id="2" context="Suspend" />
            <Trial_BlockInfo id="3" context="Terminal" />
            <Trial_BlockInfo id="4" context="Completed" />

        </div>
    </div>;
};
