import classNames from 'classnames';
import styles from './trial-org-full-page.module.scss';
import { Header } from '../header/header';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Create_NewTrialOrg_button } from '../create-new-trial-org-button/create-new-trial-org-button';
import { TrialOrg_BlockInfo } from '../trial-org-block-info/trial-org-block-info';
import { Filter_Component } from '../filter-component/filter-component';
import { useEffect, useState } from 'react';
import { fetchGet } from '../fetch/fetch';

export interface TrialOrg_FullPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */





export const TrialOrg_FullPage = ({ className }: TrialOrg_FullPageProps) => {
    const [organisations, setOrganisations] = useState([]);
    const organisationGetUrl = 'http://localhost:8000/api/trialorgs/'

    useEffect(() => {
        fetchGet(organisationGetUrl, setOrganisations)
    }, [])

    const listOrganisations = organisations.map(organisation =>
        <TrialOrg_BlockInfo name={organisation['organisationname']} id={organisation['organisationid']} contactNumber={organisation['contactnumber']} />
        )
    
    return <div >
        <Header />
        <FullNavBar />
        <div className={classNames(styles.TrialsPageHeader, 'TrialOrg_Header', "padding")}>
            <h1>Trial Organization</h1>
            <Create_NewTrialOrg_button />
        </div>

        <div className="Trial_HomePage">
            {listOrganisations}
        </div>
    </div>
};