import { StyleSheet, Text, View } from 'react-native'
import { FullMovie } from '../../../core/entities/movie.entity'
import { Formatter } from '../../../config/helpers/formatter';
import { Cast } from '../../../core/entities/cast.entity';
import { FlatList } from 'react-native-gesture-handler';
import { CastActor } from '../cast/CastActor';

interface Props {
    movie: FullMovie;
    cast: Cast[];
    isLoading: boolean;
}

export const MovieDetail = ({ movie, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>

                <View style={{ flexDirection: 'row' }}>
                    <Text >{movie.votes} -</Text>
                    <Text style={{ marginLeft: 5 }} >{movie.genres.join(', ')}</Text>
                </View>


                <Text style={styles.textTitle}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16 }}>{movie.description}</Text>


                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 16 }}>{Formatter.currency(movie.budget)}</Text>
            </View>

            {/* Casting */}
            <View style={{ marginTop: 10, marginBottom: 50 }}>
                <Text style={{ marginVertical: 10, marginHorizontal: 20, fontSize: 23, fontWeight: 'bold' }}>
                    Actores
                </Text>

                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <CastActor actor={item} />}
                />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    textTitle: {
        fontSize: 23,
        marginTop: 10,
        fontWeight: 'bold',
    },
    textNormal: {
        fontSize: 16,
    }
})