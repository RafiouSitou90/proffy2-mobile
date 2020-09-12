import React, { ReactNode } from "react"
import {
	createText,
	createBox,
	useTheme as useReTheme,
	ThemeProvider as ReStyleThemeProvider,
	createTheme,
} from "@shopify/restyle"
import { ImageStyle, TextStyle, ViewStyle } from "react-native"

export const palette = {
	purple: "#8257E5",
	lightPurple: "#9871F5",
	mediumPurple: "#774DD6",
	darkPurple: "#6842C2",
	lightGreen: "#24EF7F",
	darkGreen: "#04D361",
	red: "#E33D3D",
	white: "#FFFFFF",
	gray: "#E5E5E5",
	athensGray: "#E6E6F0",
	whisper: "#EBEBF5",
	lightWhisper: "#F0F0F7",
	almostWhite: "#FAFAFC",
	mischka: "#DCDCE5",
	martinique: "#32264D",
	dolphin: "#6A6180",
	santaGray: "#9C98A6",
	graySuit: "#C1BCCC",
	melRose: "#D4C2FF",
	portage: "#A380F6",
}

const theme = createTheme({
	colors: {
		primary: palette.purple,
		lightPurple: palette.lightPurple,
		mediumPurple: palette.mediumPurple,
		darkPurple: palette.darkPurple,
		secondary: palette.darkGreen,
		lightGreen: palette.lightGreen,
		red: palette.red,
		white: palette.white,
		almostWhite: palette.almostWhite,
		grayBackground: palette.gray,
		melRose: palette.melRose,
		martinique: palette.martinique,
		dolphin: palette.dolphin,
		santaGray: palette.santaGray,
		graySuit: palette.graySuit,
		mischka: palette.mischka,
		athensGray: palette.athensGray,
	},
	spacing: {
		zero: 0,
		xs: 8,
		s: 16,
		ms: 24,
		m: 32,
		l: 40,
		xl: 80,
		xxl: 96,
	},
	borderRadii: {
		zero: 0,
		xs: 2,
		s: 4,
		ms: 8,
		m: 16,
		ml: 20,
		l: 25,
		xl: 50,
		xxl: 100,
	},
	breakpoints: {
		phone: 0,
		tablet: 768,
		largeTablet: 1024,
	},
	zIndices: {
		minimum: -1,
		maximum: 101,
	},
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
	<ReStyleThemeProvider theme={theme}>{children}</ReStyleThemeProvider>
)

export type Theme = typeof theme
export const Box = createBox<Theme>()
export const Text = createText<Theme>()
export const useTheme = () => useReTheme<Theme>()

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle }

export const makeStyles = <T extends NamedStyles<T>>(
	styles: (theme: Theme) => T
) => () => {
	const currentTheme = useTheme()
	return styles(currentTheme)
}
