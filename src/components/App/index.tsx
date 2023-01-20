import React, { useEffect } from "react";
import {Navigation} from "../Navigation";
import style from './App.module.scss'

const App: React.FC = () => {

    return (
        <>
            <Navigation/>
            <main className={style.main}>
                <p className={style.greetings}>text</p>
            </main>
        </>
    )
}

export default App;