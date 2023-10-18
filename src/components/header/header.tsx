import classNames from 'classnames';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    return <div className="Header">
        <div>
        <img src="https://d1.awsstatic.com/apac/customer-references-logos-(%401x---%402x)/eHealthNSW_Logo%402x.7bf59f1d50bacc6c378cb4f49be66ac88bc1201a.png"
            style={{
                paddingRight: '10px',
                paddingLeft: '10px',
            }} />
            </div>
        <div className="Header_Interaction">
            <img src="https://w7.pngwing.com/pngs/608/913/png-transparent-computer-icons-google-search-symbol-mobile-search-search-for-miscellaneous-logo-mobile-phones-thumbnail.png"
                style={{
                    height: 35,
                    width: 35,
                    paddingRight: '10px',
                    paddingLeft: '10px',
                }} />
            <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                style={{
                    height: 35,
                    width: 35,
                    paddingRight: '10px',
                    paddingLeft: '10px',
                }}
            />
            Hello, User

            <img src="https://cdn-icons-png.flaticon.com/512/56/56805.png" alt=""
                style={{
                    height: 35,
                    width: 35,
                    objectFit: 'cover',
                    marginLeft: 10,
                }} />

        </div>
    </div>;
};
