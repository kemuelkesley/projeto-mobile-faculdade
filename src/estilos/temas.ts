import { extendTheme } from "native-base";

export const TEMAS = extendTheme({
    colors: {
        gray: {
            300: '#8D8D99',
        },
        blue: {
            500: '#339CFF',
        },
        white: '#fff',
        black: '#000',
    },

    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 24,
        xl: 26,
    }
})