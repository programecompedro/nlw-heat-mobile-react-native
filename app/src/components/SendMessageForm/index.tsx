import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { COLORS } from '../../screens/theme'
import Button from '../Button'

export default function SendMessageForm() {
    const [message, setMessage] = useState("");
    const [sendingMessage, setSendingMessage] = useState(false);
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                keyboardAppearance="dark"
                placeholder="Qual sua expectativa para o evento?"
                placeholderTextColor={COLORS.GRAY_PRIMARY}
                multiline
                onChangeText={setMessage}
                value={message}
                editable={!sendingMessage}
                maxLength={140}

            />
            <Button isLoading={false} title="ENVIAR MENSAGEM" color={COLORS.WHITE} backgroundColor={COLORS.PINK} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 184,
        backgroundColor: COLORS.BLACK_TERTIARY,
        paddingBottom: getBottomSpace() + 16,
        paddingTop: 16,
        paddingHorizontal: 24
    },
    input: {
        width: "100%",
        height: 88,
        textAlignVertical: "top",
        color: COLORS.WHITE,
    }
})
