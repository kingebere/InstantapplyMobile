import { Text, ScrollView } from "react-native";

import CustomSafeAreaView from "@/components/layout/CustomSafeAreaView";
import AuthHeader from "@/components/auth/Header";

const RegisterPage = () => {
    return (
        <CustomSafeAreaView>
            <ScrollView contentContainerStyle={{ flex: 1, paddingBottom: 10 }} className="flex-1 px-5">
                <AuthHeader
                    header="Create an  account"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nobis assumenda"
                />
            </ScrollView>
        </CustomSafeAreaView>
    );
};

export default RegisterPage;
