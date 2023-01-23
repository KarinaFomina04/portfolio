import React from 'react';
import style from './Navigation.modules.scss';
import ArrowIcon from './svg/ArrowIcon';
import AboutIcon from './svg/AboutIcon';
import SkillsIcon from './svg/SkillsIcon';
import WorkIcon from './svg/WorkIcon';
import ContactIcon from './svg/ContactIcon';
import LinkedInIcon from './svg/LinkedInIcon';
import GitIcon from './svg/GitIcon';
import GmailIcon from './svg/GmailIcon';

const Navigation: React.FC = () => {

    return (
        <nav className={`${style.navbar}`}>
            <ul className={style.navbarNav}>
                <li className={style.logo}>
                    <a href="#" className={style.navLink}>
                        <span className={`${style.linkText} ${style.logoText}`}>2K</span>
                        <ArrowIcon />
                    </a>
                </li>
                <li className={style.navItem}>
                    <a href="#" className={style.navLink}>
                        <AboutIcon />
                        <span className={style.linkText}>Cats</span>
                    </a>
                </li>
                <li className={style.navItem}>
                    <a href="#" className={style.navLink}>
                        <SkillsIcon />
                        <span className={style.linkText}>Aliens</span>
                    </a>
                </li>
                <li className={style.navItem}>
                    <a href="#" className={style.navLink}>
                        <WorkIcon />
                        <span className={style.linkText}>Space</span>
                    </a>
                </li>
                <li className={style.navItem}>
                    <a href="#" className={style.navLink}>
                        <ContactIcon />
                        <span className={style.linkText}>Shuttle</span>
                    </a>
                </li>

            </ul>
            <ul className={style.socials}>
                <li className={style.navItem}>
                    <a href='https://github.com/KarinaFomina04'>
                        <GitIcon/>
                    </a>
                </li>
                <li className={style.navItem}>
                    <a href='https://www.linkedin.com/in/karina-kryshneva-192a4a221/'>
                       <LinkedInIcon/>
                    </a>
                </li>
                <li className={style.navItem}>
                    <a href='mailto:karinafomina.19970804@gmail.com'>
                        <GmailIcon/>
                    </a>
                </li>

            </ul>
        </nav>
    )
}

export default Navigation;