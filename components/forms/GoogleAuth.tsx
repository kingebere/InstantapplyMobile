import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { GoogleIcon } from "@/constants/icons";

const GoogleAuth = () => {
    return (
        <TouchableOpacity className="flex-row items-center space-x-3 py-4 bg-white px-5 border border-[#ebebeb] w-full rounded-lg justify-center">
            <GoogleIcon />
            <Text className="text-base text-gray-800 font-grotesk_semibold">Continue with Google</Text>
        </TouchableOpacity>
    );
};

export default GoogleAuth;
