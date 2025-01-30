import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    moviePoster?: string;
    movieTitle?: string;
    movieSubtitle?: string;
}

export const MovieHeader = ({ moviePoster, movieSubtitle, movieTitle }: Props) => {

    const { height: screenHeight } = useWindowDimensions();
    const { top } = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
        <View style={{ ...styles.imageContainer, height: screenHeight * 0.7 }}>
            <View style={{ ...styles.imageBorder }}>
                <Image
                    style={{ ...styles.posterImage }}
                    source={{ uri: moviePoster }}
                />
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movieSubtitle}</Text>
                <Text style={styles.title}>{movieTitle}</Text>
            </View>

            <View style={{ ...styles.backButton, top: top + 10 }}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>Regresar</Text>
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
    },

    imageBorder: {
        flex: 1,
        overflow: 'hidden'
    },
    posterImage: {
        flex: 1,
    },

    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        left: 10,
    },
    backButtonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.55)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
});