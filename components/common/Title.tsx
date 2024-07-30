import { StyleSheet, Text } from "react-native"
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from "@/constants/Colors";

type TProps = {
    title: string
}

export function Title({ title }: TProps) {
    const colorScheme = useColorScheme();

    return <Text style={[styles.text, { color: Colors[colorScheme ?? "light"].text }]}>{title}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
    }
})