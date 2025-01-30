import { StackScreenProps } from '@react-navigation/stack'
import { StyleSheet } from 'react-native'
import { RootStackParams } from '../../navigation/Navigation'
import { useMovie } from '../../hooks/useMovie'
import { MovieHeader } from '../../components/movie/MovieHeader'
import { MovieDetail } from '../../components/movie/MovieDetail'
import { ScrollView } from 'react-native-gesture-handler'
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader'

interface Props extends StackScreenProps<RootStackParams, 'Details'> { };

export const DetailsScreen = ({ route }: Props) => {

  const { movieId } = route.params;
  const { isLoading, fullMovie, cast = [] } = useMovie(movieId);


  if (isLoading) {
    return <FullScreenLoader />
  }

  return (
    <ScrollView style={styles.container}>

      <MovieHeader
        moviePoster={fullMovie!.poster}
        movieSubtitle={fullMovie!.originalTitle}
        movieTitle={fullMovie!.title}
      />

      <MovieDetail
        movie={fullMovie!}
        cast={cast}
        isLoading={!isLoading}
      />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
}) 
