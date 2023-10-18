import classNames from 'classnames';
import styles from './nav-component.module.scss';

export interface NavComponentProps {
    className?: string;
    context?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NavComponent = ({ className, context }: NavComponentProps) => {
    return <div>
    <h3>{context}</h3>
    </div>;
};
