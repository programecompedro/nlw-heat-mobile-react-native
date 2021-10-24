import React from 'react'
import { StyleSheet, View } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { COLORS } from '../../screens/theme'
import Button from '../Button'

export default function SignInBox() {
    return (
        <View style={styles.container}>
            <Button
                title="ENTRAR COM O GITHUB"
                color={COLORS.BLACK_PRIMARY}
                backgroundColor={COLORS.YELLOW}
                icon="github"
                isLoading={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 48,
        backgroundColor: COLORS.BLACK_PRIMARY,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingBottom: getBottomSpace() + 32,

    }
})
