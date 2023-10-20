import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import CONSTANTS from '../../constants';
import { setTheme } from '../../store/slices/themeSlice';
import styles from './Header.module.scss';

const { THEMES } = CONSTANTS;


const Header = (props) => {
    const { theme, setTheme, language } = props;

    const className = cx(styles.header, {
        [styles.darkTheme]: theme === THEMES.DARK,
        [styles.lightTheme]: theme === THEMES.LIGHT
    })

    return (
        <header className={className}>
            <nav>
                <h1>My Site</h1>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                </ul>
            </nav>
            <div>
                <button onClick={setTheme}>Switch theme</button>
            </div>
        </header>
    );
}

const mStP = (state) => {
    return {
        theme: state.theme,
        language: state.lang
    }
}

const mDtP = (dispatch) => {
    return {
        setTheme: () => dispatch(setTheme())
    }
}

export default connect(mStP, mDtP)(Header);
