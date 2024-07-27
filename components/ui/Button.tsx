import { Text, TouchableOpacity } from "react-native";

const variants = {
    primary: { body: "bg-primary-blue", text: "text-white" },
    secondary: { body: "", text: "" },
};

type Props = {
    text: string;
    variant?: "primary" | "secondary";
};

const Button = ({ variant = "primary", text }: Props) => {
    return (
        <TouchableOpacity className={`w-full flex items-center justify-center py-4 px-5 rounded-lg ${variants[variant].body}`}>
            <Text className={`text-base font-grotesk_semibold ${variants[variant].text}`}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;
