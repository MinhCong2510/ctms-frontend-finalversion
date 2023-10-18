import classNames from 'classnames';
import styles from './full-nav-bar.module.scss';
import { NavComponent } from '../nav-component/nav-component';

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
        <NavComponent context="Home" />
        <NavComponent context="Trials" />
        <NavComponent context="Trial Organizations" />
        <NavComponent context="Patients???" />
    </div>;
};
