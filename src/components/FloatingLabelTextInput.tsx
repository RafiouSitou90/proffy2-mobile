import React, { forwardRef, ReactNode, useState } from "react"
import { TextInput, TextInputProps } from "react-native"
import { Box, useTheme, Text } from "../theme"

interface FloatingLabelTextInputProps extends TextInputProps {
	label: string
	isFocused: boolean
	icon?: ReactNode
}

const FloatingLabelTextInput = forwardRef<
	TextInput,
	FloatingLabelTextInputProps
>(({ label, icon, isFocused, ...props }, ref) => {
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
					color: !focused
						? theme.colors.dolphin
						: theme.colors.graySuit,
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
					width: "90%",
					paddingHorizontal: theme.spacing.ms,
					marginRight: theme.spacing.xs,
					textAlignVertical: "bottom",
					marginTop: 30,
					paddingBottom: 4,
				}}
			/>

			{icon && (
				<Box
					justifyContent={"center"}
					style={{
						position: "absolute",
						right: 10,
						top: 20,
						paddingHorizontal: 5,
					}}
				>
					{icon}
				</Box>
			)}
		</Box>
	)
})

export default FloatingLabelTextInput
