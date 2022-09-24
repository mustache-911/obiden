import React, { createContext, useState } from 'react'

export const ColorContext = createContext({})

// You also have to change colors on :root from index.css

export function ColorContextProvider(props) {
    const [isDark, setIsDark] = useState(false)
    const [mainColor, setMainColor] = useState("#2E3B55")
    const [darkColor, setDarkColor] = useState("#222")
    const [lightColor, setLightColor] = useState("#ecf0f1")

    return (
        <ColorContext.Provider
            value={{
                isDark, setIsDark,
                mainColor, setMainColor,
                darkColor, setDarkColor, 
                lightColor, setLightColor
            }}>
            {props.children}
        </ColorContext.Provider>
    )
}
