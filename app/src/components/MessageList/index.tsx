import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Message from '../Message'



export default function MessageList() {

    const message = {
        id: '1',
        text: "Welcome the demeu's app",
        user: {
            name: "Pedrão App Developer",
            avatar_url: "https://github.com/programecompedro.png"
        }
    }
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="never"
        >
            <Message data={message} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 135,
        paddingBottom: 184,
    },
    content: {

    }
})
