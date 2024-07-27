import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

import { CaretLeftIcon } from "@/constants/icons";

type Props = {
    header?: string;
    description?: string;
};

const AuthHeader = ({ header, description }: Props) => {
    const router = useRouter();

    return (
        <View className="space-y-7 mb-8">
            <TouchableOpacity className="h-11 w-11 rounded-full border items-center justify-center border-gray-400" onPress={() => router.back()}>
                <CaretLeftIcon />
            </TouchableOpacity>
            <View className="space-y-2">
                <Text className="text-primary-black text-2xl font-grotesk_semibold">{header}</Text>
                <Text className="text-[#6B6B6B] font-grotesk text-sm">{description}</Text>
            </View>
        </View>
    );
};

export default AuthHeader;
