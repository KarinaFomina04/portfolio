import React from 'react';
import style from './Navigation.modules.scss';
import ArrowIcon from './svg/ArrowIcon';
import AboutIcon from './svg/AboutIcon';
import SkillsIcon from './svg/SkillsIcon';
import WorkIcon from './svg/WorkIcon';
import ContactIcon from './svg/ContactIcon';

const Navigation: React.FC = () => {

    return (
        <nav className={`${style.navbar}`}>
            <ul className={style.navbarNav}>
                <li className={style.logo}>
                    <a href="#" className={style.navLink}>
                        <span className={`${style.linkText} ${style.logoText}`}>2K</span>
                        <ArrowIcon/>
                    </a>
                </li>
                <li className={style.navItem}>
                    <a href="#" className={style.navLink}>
                       <AboutIcon/>
                        <span className={style.linkText}>Cats</span>
                    </a>
                </li>
                <li className={style.navItem}>
                    <a href="#" className={style.navLink}>
                     <SkillsIcon/>
                        <span className={style.linkText}>Aliens</span>
                    </a>
                </li>
                <li className={style.navItem}>
                    <a href="#" className={style.navLink}>
                       <WorkIcon/>
                        <span className={style.linkText}>Space</span>
                    </a>
                </li>
                <li className={style.navItem}>
                    <a href="#" className={style.navLink}>
                        <ContactIcon/>
                        <span className={style.linkText}>Shuttle</span>
                    </a>
                </li>

            </ul>
            <ul className={style.socials}>
                <li>
                    <a className={style.git}>GitHub</a>
                </li>
                <li>
                    <a className={style.linkedIn}>LinkedIn</a>
                </li>
                <li>
                    <a className={style.gmail}>Gmail</a>
                </li>

            </ul>
        </nav>
    )
}

export default Navigation;