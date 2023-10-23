import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import CONSTANTS from '../../constants';
import { setTheme } from '../../store/slices/themeSlice';
import { setLang } from '../../store/slices/langSlice';
import styles from './Header.module.scss';
import { translations } from '../../utils/translations';

const { LANGUAGE } = CONSTANTS;

const Header = () => {
    const language = useSelector((state) => state.lang);
    const dispatch = useDispatch();

    const { toogleText, headerText } = translations.get(language);

    return (
        <header className={styles.header}>
            <nav>
                <h1>{headerText}</h1>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                </ul>
            </nav>
            <div>
            <select value={language} onChange={({target: {value}}) => dispatch(setLang(value))}>
                {Object.values(LANGUAGE).map((langObj, index) => (
                    <option key={index} value={langObj.VALUE}>{langObj.OPTION_TEXT}</option>
                ))}
            </select>
            </div>
            <div>
                <button onClick={() => dispatch(setTheme())}>{toogleText}</button>
            </div>
        </header>
    );
}

// const mStP = (state) => {
//     return {
//         theme: state.theme,
//         language: state.lang
//     }
// }

// const mDtP = (dispatch) => {
//     return {
//         setTheme: () => dispatch(setTheme())
//     }
// }

// export default connect(mStP, mDtP)(Header);

export default Header;
