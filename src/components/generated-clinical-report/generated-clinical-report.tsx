import classNames from 'classnames';
import styles from './generated-clinical-report.module.scss';
import { Header } from '../header/header';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Trial_HomePage_Overview } from '../trial-home-page-overview/trial-home-page-overview';
import { Trial_HomePage_Description } from '../trial-home-page-description/trial-home-page-description';
import { Observation_SummaryReport } from '../observation-summary-report/observation-summary-report';

export interface Generated_ClinicalReportProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */





export const Generated_ClinicalReport = ({ className }: Generated_ClinicalReportProps) => {
    return <div>
        <Header />
        <FullNavBar />
        <div>
            <Trial_HomePage_Overview />
            <Trial_HomePage_Description />

            <div className="ObservationSum_Report"><h2>Observation</h2>

                <Observation_SummaryReport id={1} />
                <Observation_SummaryReport id={2} />

            </div>
        </div>


    </div>;
};
