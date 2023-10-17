import classNames from 'classnames';
import styles from './trial-block-info.module.scss';

export interface Trial_BlockInfoProps {
    className?: string;
    id?: string;
    context?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Trial_BlockInfo = ({ className, id, context }: Trial_BlockInfoProps) => {
    return <div className="Trial_BlockInfo">
        <h4>Trial number:{id} {/* number */}</h4>
        Status:{context} {/* Recruiting/Completed/Terminate/Suspend */}
        <div >
            <img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg"
                style={{
                    paddingRight: '10px',
                    paddingLeft: '10px',
                    height: 150,
                    width: 150,
                    objectFit: 'cover',
                }}
        </div>

    </div>;
};
