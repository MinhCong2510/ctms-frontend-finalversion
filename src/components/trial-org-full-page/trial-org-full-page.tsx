import classNames from 'classnames';
import styles from './trial-org-full-page.module.scss';
import { Header } from '../header/header';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Create_NewTrialOrg_button } from '../create-new-trial-org-button/create-new-trial-org-button';
import { TrialOrg_BlockInfo } from '../trial-org-block-info/trial-org-block-info';
import { Filter_Component } from '../filter-component/filter-component';

export interface TrialOrg_FullPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */





export const TrialOrg_FullPage = ({ className }: TrialOrg_FullPageProps) => {
    return <div >
        <Header />
        <FullNavBar />
        <div className={classNames(styles.TrialsPageHeader, 'TrialOrg_Header')}>
            <h1>Trial Organization</h1>
            <Create_NewTrialOrg_button /></div>
        <Filter_Component />

        <div className="Trial_HomePage">


            <TrialOrg_BlockInfo name="ABC" id="123" contactNumber="02......" />
            <TrialOrg_BlockInfo name="DEF" id="456" contactNumber="02....." />
            <TrialOrg_BlockInfo name="GHI" id="789" contactNumber="02....." /></div></div>
};