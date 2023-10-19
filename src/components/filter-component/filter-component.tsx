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
            <option>Lastest to Oldest</option>
            <option>Oldest to Lastest</option>
            <option>A to Z</option>
            <option>Z to A</option>

        </select>
        <select>
            <option>Status</option>
            <option>Recruiting</option>
            <option>Completed</option>
            <option>Suspended</option>
            <option>Terminated</option>
        </select>
        <select>
            <option>Organization</option>
            <option>NSW</option>
            <option>VIC</option>
            <option>QLD</option>
            <option>TAS</option>
            <option>SA</option>
            <option>NT</option>
            <option>WA</option>
            <option>International</option>
        </select>

        <select>
        <option>Date</option>
        <option>within 1 months</option>
        <option>within 3 months</option>
        <option>within 6 months</option>
        <option>within 12 months</option>
        
        </select>
        

    </div>;
};
