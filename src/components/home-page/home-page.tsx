import classNames from 'classnames';
import styles from './home-page.module.scss';
import { Header } from '../header/header';
import { Trial_BlockInfo } from '../trial-block-info/trial-block-info';
import { Create_NewTrial_Button } from '../create-new-trial-button/create-new-trial-button';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Filter_Component } from '../filter-component/filter-component';
import { Create_NewTrialOrg_button } from '../create-new-trial-org-button/create-new-trial-org-button';
import { TrialOrg_BlockInfo } from '../trial-org-block-info/trial-org-block-info';



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
        <FullNavBar />
        <div>
            <div className="TrialOrg_Header">
                <h1>Trials</h1>
                <Create_NewTrial_Button /></div>
            <Filter_Component />
            <div className="Trial_HomePage">



                <Trial_BlockInfo id="1" context="Recruiting" />
                <Trial_BlockInfo id="2" context="Suspend" />
                <Trial_BlockInfo id="3" context="Terminal" />
                <Trial_BlockInfo id="4" context="Completed" />
                <Trial_BlockInfo id="5" context="Completed" />

            </div>
            <div className={classNames(styles.TrialsPageHeader, 'TrialOrg_Header')}>
            <h1>Trial Organization</h1>
            <Create_NewTrialOrg_button /></div>
            
            <Filter_Component />

        <div className="Trial_HomePage">


            <TrialOrg_BlockInfo name="ABC" id="123" contactNumber="02......" location="NSW" />
            <TrialOrg_BlockInfo name="DEF" id="456" contactNumber="02....."  location="VIC"/>
            <TrialOrg_BlockInfo name="GHI" id="789" contactNumber="02....." location="TAS"/></div>
            
            
            </div>
       </div>;
};
