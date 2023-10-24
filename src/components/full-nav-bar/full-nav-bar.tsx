import classNames from 'classnames';
import styles from './full-nav-bar.module.scss';
import { NavComponent } from '../nav-component/nav-component';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { HomePage } from '../home-page/home-page';



export interface FullNavBarProps {
    className?: string;
    context?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FullNavBar = ({ className }: FullNavBarProps) => {
    return <div className="FullNavBar">
        <Link to="/home"> <NavComponent context="Home" /> </Link>
        <NavComponent context="Trials" />
        <NavComponent context="Trial Organizations" />
       
    </div>;
};
