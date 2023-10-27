import classNames from 'classnames';
import styles from './input-component.module.scss';

export interface Input_ComponentProps {
    className?: string;
    id?:string;
    context?: string;

}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Input_Component = ({ className, context,id }: Input_ComponentProps) => {
    return <div >
        {context}: <input id={id}/>
    </div>;
};
