import classNames from 'classnames';
import styles from './trial-home-page.module.scss';
import { Header } from '../header/header';
import { FullNavBar } from '../full-nav-bar/full-nav-bar';
import { Trial_HomePage_Description } from '../trial-home-page-description/trial-home-page-description';
import { BrowserRouter, Routes, Route,Link} from 'react-router-dom';
import { Trial_HomePage_Overview } from '../trial-home-page-overview/trial-home-page-overview';




export interface Trial_HomePageProps {
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




export const Trial_HomePage = ({ className, id, status, name, participants }: Trial_HomePageProps) => {
    return <div>
        <Header />
        <div>
            <FullNavBar />
             <div className="Trial_HomePage_ContentBlock">
                <Trial_HomePage_Overview
                name="ABC"
                id="123"
                status="Recruting/Completed/Suspended/..."
                participants="150 [insert minimum and maximum number of participants]" />
            <div>
                <Link to="/Observation" >    <button className="CreateTrialButton">Observation</button>  </Link>
                <button className="CreateTrialButton">Submission </button>
                <button className="CreateTrialButton">Trial record</button>
            </div>

            <Trial_HomePage_Description />
        </div>
        </div>

    </div>;
};
