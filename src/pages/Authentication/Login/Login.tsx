import React from "react"
import { Dimensions, TextInput } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { Feather as Icon } from "@expo/vector-icons"

import { Box, Text, useTheme } from "../../../theme"
import Header from "../components/Header"
import { BorderlessTap } from "../../../components"

const { width } = Dimensions.get("window")

const Login = () => {
	const theme = useTheme()
	return (
		<Box flex={1} backgroundColor="grayBackground">
			<KeyboardAwareScrollView>
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
						<BorderlessTap
							onPress={() => alert("Create an account")}
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
						</BorderlessTap>
					</Box>
				</Box>

				<Box
					marginHorizontal="m"
					style={{
						borderWidth: 1,
						borderColor: theme.colors.athensGray,
						backgroundColor: theme.colors.almostWhite,
						width: width * 0.85,
						height: 64,
						borderTopLeftRadius: theme.borderRadii.ms,
						borderTopRightRadius: theme.borderRadii.ms,
					}}
				>
					<TextInput />
				</Box>
				<Box
					marginHorizontal="m"
					style={{
						borderWidth: 1,
						borderColor: theme.colors.athensGray,
						backgroundColor: theme.colors.almostWhite,
						width: width * 0.85,
						height: 64,
						borderBottomLeftRadius: theme.borderRadii.ms,
						borderBottomRightRadius: theme.borderRadii.ms,
					}}
				>
					<TextInput />
				</Box>

				<Box
					flexDirection="row"
					justifyContent="space-between"
					alignItems="center"
					marginTop="ms"
					marginBottom="l"
					marginHorizontal="m"
				>
					<BorderlessTap onPress={() => alert("Remember me")}>
						<Box
							flexDirection="row"
							style={{
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Box
								marginRight="s"
								width={24}
								height={24}
								justifyContent="center"
								alignItems="center"
								borderRadius="ms"
								borderWidth={2}
								borderColor="secondary"
								backgroundColor="secondary"
							>
								<Icon name="check" color="white" size={18} />
							</Box>
							<Text
								style={{
									fontFamily: "Poppins-Regular",
									fontWeight: "normal",
									fontSize: 12,
									lineHeight: 24,
									color: theme.colors.santaGray,
								}}
							>
								Remember me
							</Text>
						</Box>
					</BorderlessTap>

					<BorderlessTap onPress={() => alert("Forgot password")}>
						<Text
							style={{
								fontFamily: "Poppins-Regular",
								fontWeight: "normal",
								fontSize: 12,
								lineHeight: 24,
								color: theme.colors.santaGray,
								borderRadius: theme.borderRadii.s,
								textAlign: "center",
							}}
						>
							Forgot password
						</Text>
					</BorderlessTap>
				</Box>

				<Box
					justifyContent="center"
					alignItems="center"
					marginBottom="m"
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
			</KeyboardAwareScrollView>
		</Box>
	)
}

export default Login
