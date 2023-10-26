import classNames from 'classnames';
import './generated-clinical-report.module.scss';
import { Trial_HomePage_Overview } from '../trial-home-page-overview/trial-home-page-overview';
import { Trial_HomePage_Description } from '../trial-home-page-description/trial-home-page-description';
import { Observation_SummaryReport } from '../observation-summary-report/observation-summary-report';
import { Trial } from '../trial/trial';

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
            <Trial_HomePage_Description />
            <h3 className="Trial_HomePage_Description">Observations</h3>
            <Observation_SummaryReport/>
        </div>


    </div>;
};
