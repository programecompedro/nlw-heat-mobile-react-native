import React, { Component } from 'react'
import { Image } from 'react-native'
import { styles } from './styles'
import avatarIMG from '../../assets/avatar.png'
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../screens/theme';


const SIZES = {
    SMALL: {
        containerSize: 32,
        avatarSize: 28,

    },
    NORMAL: {
        containerSize: 48,
        avatarSize: 42,
    }
}

type Props = {
    imageURI: string | undefined;
    sizes?: 'SMALL' | 'NORMAL';
}

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarIMG).uri;

export function UserPhoto({ imageURI, sizes = 'NORMAL' }: Props) {
    const { containerSize, avatarSize } = SIZES[sizes];
    return (
        <LinearGradient 
        colors={[COLORS.PINK, COLORS.YELLOW]} 
        style={[styles.container, {
            width: containerSize,
            height: containerSize,
            borderRadius: containerSize / 2
        }]}
        start={{x: 0, y: 0.8}}
        end={{x:0.9, y:1}}
        >
            <Image source={{ uri: imageURI || AVATAR_DEFAULT }}
                style={[styles.avatar, {
                    width: avatarSize,
                    height: avatarSize,
                    borderRadius: avatarSize / 2
                }]}
            />
        </LinearGradient>
    )
}



