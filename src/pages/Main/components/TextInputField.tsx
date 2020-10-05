import React, { forwardRef } from "react"
import { TextInput, TextInputProps } from "react-native"
import { Box, Text, useTheme } from "../../../theme"

interface TextInputFieldProps extends TextInputProps {
	label: string
}

const TextInputField = forwardRef<TextInput, TextInputFieldProps>(
	({ label, ...props }, ref) => {
		const theme = useTheme()

		return (
			<Box>
				<Text
					style={{
						fontFamily: "Poppins-Regular",
						fontSize: 12,
						lineHeight: 22,
						color: theme.colors.santaGray,
					}}
				>
					{label}
				</Text>
				<Box
					height={56}
					backgroundColor={"almostWhite"}
					borderWidth={1}
					borderRadius={"ms"}
					borderColor={"athensGray"}
					style={{ marginTop: 4 }}
				>
					<TextInput
						placeholder={label}
						placeholderTextColor={theme.colors.athensGray}
						{...{ ref, props }}
						style={{
							flex: 1,
							fontFamily: "Poppins-Regular",
							fontWeight: "normal",
							fontSize: 14,
							lineHeight: 24,
							color: theme.colors.dolphin,
							paddingHorizontal: theme.spacing.ms,
							paddingVertical: theme.spacing.s,
						}}
					/>
				</Box>
			</Box>
		)
	}
)

export default TextInputField
