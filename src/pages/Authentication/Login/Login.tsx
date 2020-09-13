import { Feather as Icon } from "@expo/vector-icons"
import React, { useRef, useState } from "react"
import { Dimensions, TextInput } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { BorderlessTap, FloatingLabelTextInput } from "../../../components"

import { Box, Text, useTheme } from "../../../theme"
import Header from "../components/Header"

const { width } = Dimensions.get("window")

const Login = () => {
	const theme = useTheme()

	const [showPassword, setShowPassword] = useState<boolean>(true)
	const [emailValue, setEmailValue] = useState<string>()
	const [passwordValue, setPasswordValue] = useState<string>()
	const [rememberMe, setRememberMe] = useState<boolean>(false)

	const email = useRef<TextInput>(null)
	const password = useRef<TextInput>(null)

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
					<FloatingLabelTextInput
						ref={email}
						label="Email"
						isFocused={false}
						value={emailValue}
						onChangeText={(text) => setEmailValue(text)}
						keyboardType="email-address"
						autoCompleteType="email"
						autoCapitalize="none"
						returnKeyType="next"
						returnKeyLabel="Next"
						onSubmitEditing={() => password.current?.focus()}
					/>
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
					<FloatingLabelTextInput
						ref={password}
						label="Password"
						isFocused={false}
						value={passwordValue}
						onChangeText={(text) => setPasswordValue(text)}
						secureTextEntry={showPassword}
						autoCompleteType="password"
						autoCapitalize="none"
						returnKeyType="go"
						returnKeyLabel="Go"
						onSubmitEditing={() => alert("Submit")}
						icon={
							<BorderlessTap
								onPress={() =>
									setShowPassword((prevState) => !prevState)
								}
							>
								<Icon
									name={showPassword ? "eye" : "eye-off"}
									size={24}
									color={theme.colors.primary}
								/>
							</BorderlessTap>
						}
					/>
				</Box>

				<Box
					flexDirection="row"
					justifyContent="space-between"
					alignItems="center"
					marginTop="ms"
					marginBottom="l"
					marginHorizontal="m"
				>
					<BorderlessTap
						onPress={() => setRememberMe((prevState) => !prevState)}
					>
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
								borderColor={
									rememberMe ? "secondary" : "primary"
								}
								backgroundColor={
									rememberMe ? "secondary" : "white"
								}
							>
								<Icon
									name="check"
									color={
										rememberMe
											? "white"
											: theme.colors.primary
									}
									size={18}
								/>
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
							backgroundColor:
								emailValue && passwordValue
									? theme.colors.secondary
									: theme.colors.mischka,
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
								color:
									emailValue && passwordValue
										? "white"
										: theme.colors.santaGray,
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