import { StyleSheet, Text, View } from "react-native"
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from "@/constants/Colors";
import { AccountInfo } from "@/types";
import { Image } from "expo-image";
import Feather from '@expo/vector-icons/Feather';

export type TProps = {
    props: AccountInfo
}

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export function Profile({ props }: TProps) {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? "light"]
    return <View style={styles.container}>
        <View style={styles.left}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={props.imageUrl}
                    placeholder={{ blurhash }}
                    contentFit="cover"
                    transition={1000}
                />
            </View>
            <View>
                <Text style={[styles.text, { color: Colors[colorScheme ?? "light"].text }]}>{props.fullName}</Text>
                <Text style={[styles.text, { color: Colors[colorScheme ?? "light"].text, fontWeight: "100", fontSize: 16 }]}>{props.phoneNumber}</Text>
            </View>
        </View>
        <View style={styles.icon}>
            <Feather name="edit-2" size={24} color="white" />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "white",
        backgroundColor: "rgba(255,255,255,0.05)",
        padding: 10,
        borderRadius: 100,
    },
    imageContainer: {
        width: 50,
        height: 50,
        overflow: "hidden"
    },
    text: {
        fontSize: 20,
    },
    image: {
        width: '100%',
        height: "100%",
        backgroundColor: '#0553',
        borderRadius: 25
    },
    icon: {
        borderColor: Colors.shared.gray,
        borderWidth: 1,
        borderRadius: 100,
        padding: 10,
        alignItems: "center"
    },
    left: {
        display: "flex",
        gap: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})