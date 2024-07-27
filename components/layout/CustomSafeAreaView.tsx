import { SafeAreaView } from "react-native-safe-area-context";
import React, { PropsWithChildren } from "react";

const CustomSafeAreaView = ({ children, ...rest }: PropsWithChildren) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }} {...rest}>
            {children}
        </SafeAreaView>
    );
};

export default CustomSafeAreaView;
