import React, { ReactNode, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import DarkTheme from "./DarkTheme";
import { LightTheme } from "./LightTheme";
import { useAppSelector } from "../../store/models/hooks";

interface MyThemeProps {
    children: ReactNode;
}

export const MyTheme: React.FC<MyThemeProps> = ({ children }) => {
    const themeRedux = useAppSelector((state) => state.theme.theme);


    useEffect(() => {
        console.log("Tema Atual:", themeRedux);
    }, [themeRedux]);

    return (
        <ThemeProvider theme={themeRedux === "dark" ? DarkTheme : LightTheme}>
            {children}
        </ThemeProvider>
    );
};




