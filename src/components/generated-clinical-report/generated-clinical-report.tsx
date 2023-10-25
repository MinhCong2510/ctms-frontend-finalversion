import classNames from 'classnames';
import './generated-clinical-report.module.scss';
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
        <div style={{margin:"20px"}}>
            <img src="https://aci.health.nsw.gov.au/__data/assets/image/0003/219369/aci-logo.png"/>
            {/* Please replace [Trial Name] with heading of the trial from database] */}
            <h1>[Trial Name]'s Clinical Trial Report</h1>
            <Trial_HomePage_Overview/>
            <Trial_HomePage_Description />

            <div className="ObservationSum_Report"><h2>Observation</h2>

                <Observation_SummaryReport id={1} />
                <Observation_SummaryReport id={2} />

            </div>
        </div>


    </div>;
};
