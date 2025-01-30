import { ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../../hooks/useMovies';
import { PosterCarrousel } from '../../components/movies/PosterCarrousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();


  if (isLoading) {
    return (<FullScreenLoader />)
  }

  return (

    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>

        {/* Carrousel principal */}
        <PosterCarrousel movies={nowPlaying} />

        {/* Populares */}
        <HorizontalCarousel
        movies={popular}
        title={'Populares '}
        loadNextPage={ popularNextPage }/>

        {/* Mejor valoradas */}
        <HorizontalCarousel movies={topRated} title={'Mejor valoradas'} />

        {/* Proximamente */}
        <HorizontalCarousel movies={upcoming} title={'Próximamente'} />

      </View>
    </ScrollView>
  )
}
