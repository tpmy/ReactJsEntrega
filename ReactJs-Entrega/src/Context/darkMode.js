import {useState, createContext} from 'react'

const DarkModeContext = createContext()
 
const DarkModeProvider = (props) => {

    const [DarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!DarkMode)
    }

    return (
        <DarkModeContext.Provider value={{DarkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

export {DarkModeContext, DarkModeProvider}