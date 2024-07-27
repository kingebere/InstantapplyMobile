import { View, Text, ScrollView } from "react-native";
import { Link } from "expo-router";

import CustomSafeAreaView from "@/components/layout/CustomSafeAreaView";
import Input from "@/components/forms/Input";
import Button from "@/components/ui/Button";
import AuthHeader from "@/components/auth/Header";
import GoogleAuth from "@/components/forms/GoogleAuth";

const LoginPage = () => {
    return (
        <CustomSafeAreaView>
            <ScrollView contentContainerStyle={{ flex: 1, paddingBottom: 10 }} className="flex-1 px-5">
                <AuthHeader
                    header="Log into your account"
                    description="Welcome back to InstantApply, please enter your login details to access your account."
                />
                <View style={{ gap: 32, flex: 1, height: "100%" }} className="flex-1 justify-between">
                    <View style={{ gap: 32 }}>
                        <Input label="Email Address" placeholder="johndoe@gmail.com" />
                        <View style={{ gap: 10 }}>
                            <Input label="Password" placeholder="********" isPassword />
                            <Link href="" className="text-right font-grotesk_medium text-primary-blue">
                                Forgot Password?
                            </Link>
                        </View>
                        <View style={{ gap: 16 }} className="items-center justify-center">
                            <Text className="text-sm font-grotesk_medium text-primary-gray">Or</Text>
                            <GoogleAuth />
                        </View>
                    </View>
                    <View style={{ gap: 12 }} className="mt-auto flex-col items-center justify-center">
                        <Button text="Login" />
                        <Text className="font-grotesk_medium">
                            Don't have an account?{" "}
                            <Link className="text-primary-blue font-grotesk_semibold" href="/register">
                                Sign Up
                            </Link>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </CustomSafeAreaView>
    );
};

export default LoginPage;
