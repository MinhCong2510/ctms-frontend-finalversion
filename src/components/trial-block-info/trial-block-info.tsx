import classNames from 'classnames';
import styles from './trial-block-info.module.scss';
import { Link } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export interface Trial_BlockInfoProps {
    className?: string;
    id?: string;
    name?: string;
    context?: string;
    treatment?: string;
    participants?:string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const Trial_BlockInfo = ({ className, id, context }: Trial_BlockInfoProps) => {
    const [info, setInfo] = useState([]);
    let {trialId} = useParams();
    useEffect(() => {
        fetchTrialInfo();
    }, [])
    const fetchUrl = 'http://localhost:8000/api/trials/' + trialId + '/';


    function fetchTrialInfo()
    {
        fetch(fetchUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setInfo(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    
    console.log(info)
    let trialLink = "/trials/" + id;
    return <Link to={trialLink}>
        <div className="Trial_BlockInfo">
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
                    }} />
            </div>

        </div>;
    </Link>
};
