import { MaterialIcons as Icon } from "@expo/vector-icons"
import { yupResolver } from "@hookform/resolvers"
import { StatusBar } from "expo-status-bar"
import React, { FunctionComponent, useRef, useState } from "react"
import { Control, useForm } from "react-hook-form"
import { FieldErrors } from "react-hook-form/dist/types/errors"
import { Dimensions } from "react-native"
import { BorderlessButton } from "react-native-gesture-handler"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import Animated, { divide } from "react-native-reanimated"
import { useScrollHandler } from "react-native-redash"
import * as Yup from "yup"

import { Button } from "../../../components"
import { AuthenticationNavigationProps } from "../../../routes/Authentication"

import { Box, Text, Theme, useTheme } from "../../../theme"
import Dot from "../components/Dot"
import EmailPassword from "./EmailPassword"
import FirstAndLastName from "./FirstAndLastName"

const { width } = Dimensions.get("window")

type signUpFormType = {
	firstName: string
	lastName: string
	email: string
	password: string
}

// interface signUpFormValues {
// 	name: string
// 	lastName: string
// 	email: string
// 	password: string
// }

const signUpSchema = Yup.object().shape({
	firstName: Yup.string().trim().required(),
	lastName: Yup.string().trim().required(),
	email: Yup.string().email().trim().lowercase().required(),
	password: Yup.string().trim().min(8).required(),
})

export interface SlideFormProps {
	control: Control
	errors: FieldErrors
}

interface SlideProps {
	label: string
	buttonLabel: string
	buttonBackgroundColor: keyof Theme["colors"]
	Form: FunctionComponent<SlideFormProps>
	enabled: boolean
}

const SignUp = ({ navigation }: AuthenticationNavigationProps<"SignUp">) => {
	const theme = useTheme()
	const { scrollHandler, x } = useScrollHandler()
	const scroll = useRef<Animated.ScrollView>(null)

	const [isLast, setIsLast] = useState<boolean>(true)

	const { handleSubmit, control, errors, formState } = useForm<
		signUpFormType
	>({
		resolver: yupResolver(signUpSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
		criteriaMode: "all",
		mode: "onBlur",
	})

	const scrollEnabled =
		(formState.touched.firstName &&
			formState.touched.lastName &&
			!errors.firstName &&
			!errors.lastName) ||
		false

	const submitEnabled =
		(formState.touched.email &&
			formState.touched.password &&
			!errors.email &&
			!errors.password) ||
		false

	const slides: SlideProps[] = [
		{
			label: "01. Who are you?",
			buttonLabel: "Next",
			buttonBackgroundColor: "primary",
			Form: FirstAndLastName,
			enabled: scrollEnabled,
		},
		{
			label: "02. Email and password",
			buttonLabel: "Register",
			buttonBackgroundColor: "secondary",
			Form: EmailPassword,
			enabled: submitEnabled,
		},
	]

	const onSubmit = (/*data: signUpFormValues*/) => {
		navigation.navigate("SignUpSuccessfully")
	}

	const onPress = (index: number) => {
		const last = index === slides.length - 1
		setIsLast(last)

		if (last) {
			handleSubmit(onSubmit)()
		} else {
			scroll.current?.getNode().scrollTo({
				x: width * (index + 1),
				animated: true,
			})
		}
	}

	const handleGoBack = () => {
		if (isLast) {
			navigation.goBack()
		} else {
			scroll.current?.getNode().scrollTo({
				x: width * -1,
				animated: true,
			})
			setIsLast(true)
		}
	}

	return (
		<Box flex={1} backgroundColor={"grayBackground"}>
			<StatusBar style={"dark"} />
			<Box
				style={{
					paddingTop: theme.spacing.m * 2,
					paddingHorizontal: 31,
				}}
			>
				<Box
					flexDirection={"row"}
					marginVertical={"xs"}
					justifyContent={"space-between"}
					alignItems={"center"}
				>
					<BorderlessButton onPress={handleGoBack}>
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

			<KeyboardAwareScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					flex: 1,
					flexDirection: "column",
					justifyContent: "space-between",
					paddingHorizontal: 20,
				}}
			>
				<Box paddingTop={"xs"} style={{ paddingHorizontal: 12 }}>
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
							Create your free{"\n"}account
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
							Just fill in these details{"\n"}and you will be with
							us.
						</Text>
					</Box>
				</Box>

				<Box>
					<Animated.ScrollView
						ref={scroll}
						{...{ scrollEnabled }}
						horizontal
						snapToInterval={width}
						decelerationRate="fast"
						showsHorizontalScrollIndicator={false}
						bounces={false}
						{...scrollHandler}
					>
						{slides.map(
							(
								{
									label,
									buttonLabel,
									buttonBackgroundColor,
									enabled,
									Form,
								},
								index
							) => (
								<Box
									key={index}
									justifyContent={"flex-end"}
									paddingHorizontal={"xs"}
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
											{label}
										</Text>
									</Box>

									<Form {...{ control, errors }} />

									<Box
										justifyContent="center"
										alignItems="center"
										marginVertical={"m"}
									>
										<Button
											label={buttonLabel}
											onPress={() => onPress(index)}
											enabled={enabled}
											color={buttonBackgroundColor}
										/>
									</Box>
								</Box>
							)
						)}
					</Animated.ScrollView>
				</Box>
			</KeyboardAwareScrollView>
		</Box>
	)
}

export default SignUp
