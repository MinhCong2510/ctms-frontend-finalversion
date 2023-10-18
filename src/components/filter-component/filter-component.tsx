import classNames from 'classnames';
import styles from './filter-component.module.scss';

export interface Filter_ComponentProps {
    className?: string;

}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Filter_Component = ({ className, }: Filter_ComponentProps) => {
    return <div className="Filter_Bar">
        <select>
            <option>Sort by</option>
            <option>Filter by Name</option>

            <option>Filter from A to Z</option>
            <option>Filter from Z to A</option>

        </select>
        <select>
            <option>Filter by Status</option>
            <option>Recruiting</option>
            <option>Completed</option>
            <option>Suspended</option>
            <option>Terminated</option>
        </select>
        <select>
            <option>Filter by Trial Organization</option>
            <option>Filter by Name</option>
            <option>Filter by ID</option>
            <option>Filter by Contact Number</option>
        </select>

    </div>;
};
