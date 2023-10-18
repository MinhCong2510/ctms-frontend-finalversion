import classNames from 'classnames';
import styles from './home-page.module.scss';
import { Header } from '../header/header';
import { Trial_BlockInfo } from '../trial-block-info/trial-block-info';
import { Create_NewTrial_Button } from '../create-new-trial-button/create-new-trial-button';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Filter_Component } from '../filter-component/filter-component';

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
        <div className={styles.Content}>
            <FullNavBar />
            <div className={styles.TrialsPageHeader}>
                <h1>Trials</h1>
                <Create_NewTrial_Button /></div>
            <div className="Trial_HomePage">



                <Trial_BlockInfo id="1" context="Recruiting" />
                <Trial_BlockInfo id="2" context="Suspend" />
                <Trial_BlockInfo id="3" context="Terminal" />
                <Trial_BlockInfo id="4" context="Completed" />
                <Filter_Component />
            </div></div>
        <br /></div>;
};
