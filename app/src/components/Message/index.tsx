import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS } from '../../screens/theme'
import { UserPhoto } from '../UserPhoto'



export type MessageProps = {
    id: string,
    text: string,
    user: {
        name: string,
        avatar_url: string
    }
}

type Props = {
    data: MessageProps
}
export default function Message({ data }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>
                {data.text}
            </Text>

            <View style={styles.footer}>
                <UserPhoto
                    imageURI={data.user.avatar_url}
                    sizes="SMALL" />
                <Text style={styles.userName}>
                    {data.user.name}
                </Text>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 36,
    },
    message: {
        fontSize: 15,
        fontFamily: FONTS.REGULAR,
        color: COLORS.WHITE,
        lineHeight: 20,
        marginBottom: 12
    },
    footer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    userName: {
        fontSize: 15,
        fontFamily: FONTS.REGULAR,
        color: COLORS.WHITE,
        marginLeft: 16,
    }
})
