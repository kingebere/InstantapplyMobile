import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

type Props = {
    label: string;
    placeholder: string;
    isPassword?: boolean;
};

const Input = ({ label = "Enter a label", placeholder = "Enter placeholder", isPassword = false }: Props) => {
    const [secureTextEntry, setSecureTextEntry] = useState(isPassword);

    return (
        <View style={{ gap: 12 }}>
            <Text className="font-grotesk_medium">{label}</Text>
            <TextInput
                className="h-[54px] text-[14px] leading-none font-grotesk_medium px-5 border border-gray-200 rounded-md text-primary-black"
                placeholder={placeholder}
                placeholderTextColor="#667085"
                secureTextEntry
            />
        </View>
    );
};

export default Input;
