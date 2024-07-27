import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const router = useRouter();
    const [loggedIn, setLoggedIn] = useState(false);

    const [loaded] = useFonts({
        Grotesk: require("../assets/fonts/Grotesk.otf"),
        GroteskMedium: require("../assets/fonts/GroteskMedium.otf"),
        GroteskSemibold: require("../assets/fonts/GroteskSemibold.otf"),
        GroteskBold: require("../assets/fonts/GroteskBold.otf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
            if (loggedIn) router.push("/");
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <>
            <Stack>
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
        </>
    );
}
