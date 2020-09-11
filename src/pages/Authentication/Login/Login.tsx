import React from "react"
import { Dimensions } from "react-native"
import { RectButton } from "react-native-gesture-handler"

import { Box, Text, useTheme } from "../../../theme"
import Header from "../components/Header"

const { width } = Dimensions.get("window")

const Login = () => {
	const theme = useTheme()
	return (
		<Box flex={1} backgroundColor="grayBackground">
			<Header />

			<Box
				flexDirection="row"
				justifyContent="space-between"
				alignItems="center"
				marginVertical="l"
				marginHorizontal="m"
			>
				<Box>
					<Text
						style={{
							fontFamily: "Poppins-Regular",
							fontWeight: "600",
							fontSize: 24,
							lineHeight: 34,
							color: theme.colors.martinique,
						}}
					>
						Login
					</Text>
				</Box>
				<Box>
					<RectButton
						onPress={() => true}
						style={{
							justifyContent: "center",
							alignItems: "center",
							width: width * 0.33,
							height: 30,
							borderRadius: 15,
						}}
					>
						<Text
							style={{
								fontFamily: "Poppins-Regular",
								fontWeight: "normal",
								fontSize: 12,
								lineHeight: 24,
								color: theme.colors.primary,
								borderRadius: theme.borderRadii.s,
							}}
						>
							Create an account
						</Text>
					</RectButton>
				</Box>
			</Box>

			<Box
				justifyContent="center"
				alignItems="center"
				position="absolute"
				bottom={0}
				left={0}
				right={0}
				marginBottom="l"
				marginHorizontal="m"
			>
				<RectButton
					style={{
						width: width * 0.85,
						height: 56,
						borderRadius: theme.borderRadii.ms,
						backgroundColor: theme.colors.mischka,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text
						style={{
							fontFamily: "Archivo-Regular",
							fontWeight: "600",
							fontSize: 16,
							lineHeight: 26,
							textAlign: "center",
							color: theme.colors.santaGray,
						}}
					>
						Enter
					</Text>
				</RectButton>
			</Box>
		</Box>
	)
}

export default Login
