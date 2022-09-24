import React, { createContext, useState } from 'react'

export const LanguageContext = createContext({})

export function LanguageContextProvider(props) {
    const [language, setLanguage] = useState("PTBR")

    return (
        <LanguageContext.Provider
            value={{
                language, setLanguage
            }}>
            {props.children}
        </LanguageContext.Provider>
    )
}
