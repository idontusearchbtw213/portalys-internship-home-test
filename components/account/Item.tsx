import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from "@/constants/Colors";
import { AccountInfo } from "@/types";
import { Image } from "expo-image";
import Feather from '@expo/vector-icons/Feather';
import { ReactNode } from "react";


export type TProps = {
    icon: ReactNode,
    title: string,
    onPress?: () => void,
}

export function Item({ title, icon, onPress }: TProps) {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? "light"]
    return (
        <TouchableOpacity onPress={onPress} style={styles.box}>
            <View style={styles.icon}>{icon}</View>
            <Text style={[styles.text, { color: colors.text }]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderColor: "rgba(255,255,255,0.2)",
        borderRadius: 100,
        borderWidth: 1,
        gap: 15,
        padding: 6,
    },
    text: {
        fontSize: 18,
        fontWeight: "500"
    },
    icon: {
        borderRadius: 100,
        padding: 10,
        alignItems: "center",
        backgroundColor: "rgba(255,255,255, 0.05)"
    },

})