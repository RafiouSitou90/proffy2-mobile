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
	const { value } = props

	function handleFocus() {
		setFocused(true)
	}

	return (
		<Box flex={1} flexDirection={"row"}>
			{focused && (
				<Box
					style={{
						position: "absolute",
						left: -1,
						top: 10,
						width: 2,
						height: 40,
						backgroundColor: "red",
						borderLeftWidth: 2,
						borderLeftColor: theme.colors.primary,
						borderRadius: 5,
					}}
				/>
			)}
			<Text
				style={{
					position: "absolute",
					left: 0,
					paddingLeft: theme.spacing.ms,
					top: value ? 10 : !focused ? 20 : 10,
					fontFamily: "Poppins-Regular",
					fontWeight: "normal",
					fontSize: value ? 10 : !focused ? 14 : 10,
					lineHeight: value ? 20 : !focused ? 24 : 20,
					color: value
						? theme.colors.graySuit
						: !focused
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
