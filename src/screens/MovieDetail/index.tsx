import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import FeatherIcon from "@expo/vector-icons/Feather";
import { MovieObjType } from "../../apis/GetNowPlaying";
import styles from "./styles";
import { getImageUri } from "../../utils/helper";
import { MovieDetailScreenProps } from "../../navigators/MainNavigator";

const MovieDetail = () => {
  const { goBack } = useNavigation<MovieDetailScreenProps["navigation"]>();
  const route = useRoute<MovieDetailScreenProps["route"]>();
  const movieData: MovieObjType = route?.params?.movieData;
  const imageUri = getImageUri(movieData.poster_path);

  return (
    <View style={styles.container}>
      <Image style={styles.poster} src={imageUri} />
      <Pressable onPress={goBack} style={styles.blurViewContainer}>
        <BlurView intensity={40} style={styles.blurView}>
          <FeatherIcon name={"chevron-left"} size={24} color={"white"} />
        </BlurView>
      </Pressable>
      <View style={styles.contentContainer}>
        <Text style={styles.posterTitle}>{movieData.title}</Text>
        <View style={styles.posterAdditinalInfoContainer}>
          <View>
            <Text style={styles.posterAdditionalInfoValue}>
              {movieData.release_date}
            </Text>
            <Text style={styles.posterAdditionalInfoLabel}>Release Date</Text>
          </View>
          <View>
            <Text style={styles.posterAdditionalInfoValue}>
              {movieData.vote_average}
            </Text>
            <Text style={styles.posterAdditionalInfoLabel}>Rating</Text>
          </View>
        </View>
        <View style={styles.overviewContainer}>
          <Text style={styles.overview}>{movieData.overview}</Text>
        </View>
      </View>
    </View>
  );
};

export default MovieDetail;
