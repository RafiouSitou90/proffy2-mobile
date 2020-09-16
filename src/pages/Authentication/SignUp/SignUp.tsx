import { MaterialIcons as Icon } from "@expo/vector-icons"
import { StatusBar } from "expo-status-bar"
import React from "react"
import { Dimensions } from "react-native"
import { BorderlessButton } from "react-native-gesture-handler"
import { divide } from "react-native-reanimated"
import { useScrollHandler } from "react-native-redash"

import { Button } from "../../../components"
import { AuthenticationNavigationProps } from "../../../routes/Authentication"

import { Box, Text, useTheme } from "../../../theme"
import Dot from "../components/Dot"

const { width } = Dimensions.get("window")

const slides = [
	{
		id: 1,
	},
	{
		id: 2,
	},
]

const SignUp = ({ navigation }: AuthenticationNavigationProps<"SignUp">) => {
	const theme = useTheme()

	const { x } = useScrollHandler()

	return (
		<Box
			paddingHorizontal={"m"}
			flex={1}
			backgroundColor={"grayBackground"}
			style={{ paddingTop: theme.spacing.m * 2 }}
		>
			<StatusBar style={"auto"} />
			<Box style={{ marginHorizontal: -2 }}>
				<Box
					flexDirection={"row"}
					marginVertical={"xs"}
					justifyContent={"space-between"}
					alignItems={"center"}
				>
					<BorderlessButton onPress={() => navigation.goBack()}>
						<Icon
							name={"keyboard-backspace"}
							color={theme.colors.santaGray}
							size={30}
						/>
					</BorderlessButton>

					<Box flexDirection={"row"}>
						{slides.map((_, index) => (
							<Dot
								key={index}
								currentIndex={divide(x, width)}
								{...{ index }}
							/>
						))}
					</Box>
				</Box>
			</Box>

			<Box
				marginTop={"xl"}
				flexDirection={"column"}
				justifyContent={"space-between"}
				alignItems={"flex-start"}
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
						Forgot your password?
					</Text>
				</Box>
				<Box marginTop={"s"}>
					<Text
						style={{
							fontFamily: "Poppins-Regular",
							fontSize: 14,
							lineHeight: 24,
							color: theme.colors.martinique,
						}}
					>
						Do not worry, let's fix it
					</Text>
				</Box>
			</Box>
			<Box
				marginHorizontal={"m"}
				bottom={0}
				position={"absolute"}
				marginBottom={"xl"}
			>
				<Box marginBottom={"ms"}>
					<Text
						style={{
							fontFamily: "Poppins-Regular",
							fontWeight: "600",
							fontSize: 24,
							lineHeight: 26,
							color: theme.colors.martinique,
						}}
					>
						01. Who are you?
					</Text>
				</Box>

				<Box
					style={{
						borderWidth: 1,
						borderColor: theme.colors.athensGray,
						backgroundColor: theme.colors.almostWhite,
						width: width * 0.85,
						height: 64,
						borderTopLeftRadius: theme.borderRadii.ms,
						borderTopRightRadius: theme.borderRadii.ms,
					}}
				/>
				<Box
					style={{
						borderWidth: 1,
						borderColor: theme.colors.athensGray,
						backgroundColor: theme.colors.almostWhite,
						width: width * 0.85,
						height: 64,
						borderBottomLeftRadius: theme.borderRadii.ms,
						borderBottomRightRadius: theme.borderRadii.ms,
					}}
				/>

				<Box
					justifyContent="center"
					alignItems="center"
					marginVertical={"m"}
				>
					<Button
						label={"Next"}
						onPress={() => true}
						enabled={false}
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default SignUp
