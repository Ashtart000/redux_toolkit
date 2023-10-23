import CONSTANTS from '../constants';

const { LANGUAGE: { EN_US, UA_UA, DE_DE} } = CONSTANTS;

export const translations = new Map([
    [
        EN_US.VALUE,
        {
            countText: 'Count',
            stepText: 'Step',
            incrementText: 'Increment',
            decrementText: 'Decrement',
            toogleText: 'Switch theme',
            headerText: 'My Site'
        }
    ],
    [
        UA_UA.VALUE,
        {
            countText: 'Лічильник',
            stepText: 'Крок',
            incrementText: 'Збільшити',
            decrementText: 'Зменшити',
            toogleText: 'Переключити тему',
            headerText: 'Мій Сайт'
        }
    ], 
    [
        DE_DE.VALUE,
        {
            countText: 'Zähler',
            stepText: 'Schritt',
            incrementText: 'Zunehmen',
            decrementText: 'Abnehmen',
            toogleText: 'Thema wechseln',
            headerText: 'Meine Seite'
        }
    ]
])
