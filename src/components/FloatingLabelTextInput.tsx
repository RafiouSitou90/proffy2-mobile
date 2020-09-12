import React, { forwardRef, useState } from "react"
import { TextInput } from "react-native"
import { Box, useTheme, Text } from "../theme"

interface FloatingLabelTextInputProps {
	label: string
	icon?: string
	error?: string
	touched?: boolean
	isFocused: boolean
}

const FloatingLabelTextInput = forwardRef<
	TextInput,
	FloatingLabelTextInputProps
>(({ label, icon, error, touched, isFocused, ...props }, ref) => {
	const theme = useTheme()
	const [focused, setFocused] = useState<boolean>(isFocused)

	function handleFocus() {
		setFocused(true)
	}
	function handleBlur() {
		setFocused(false)
	}

	return (
		<Box flex={1}>
			<Text
				style={{
					position: "absolute",
					left: 0,
					paddingLeft: theme.spacing.ms,
					top: !focused ? 20 : 10,
					fontFamily: "Poppins-Regular",
					fontWeight: "normal",
					fontSize: !focused ? 14 : 10,
					lineHeight: !focused ? 24 : 20,
					color: theme.colors.dolphin,
				}}
			>
				{label}
			</Text>
			<TextInput
				{...{ ref }}
				{...props}
				onFocus={handleFocus}
				onBlur={handleBlur}
				style={{
					paddingLeft: theme.spacing.ms,
					fontFamily: "Poppins-Regular",
					fontWeight: "normal",
					fontSize: 14,
					lineHeight: 24,
					bottom: 0,
					position: "absolute",
					color: theme.colors.dolphin,
					height: "100%",
					width: "100%",
					paddingHorizontal: theme.spacing.ms,
					textAlignVertical: "bottom",
					marginTop: 30,
					marginBottom: 10,
				}}
			/>
		</Box>
	)
})

export default FloatingLabelTextInput
