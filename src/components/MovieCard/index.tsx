import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import { MovieObjType } from "../../apis/GetNowPlaying";
import { getImageUri } from "../../utils/helper";
import styles from "./styles";

interface MovieCardProps {
  item: MovieObjType;
  index: number;
  onPress: (item: MovieObjType) => void;
  handleMovieLike: (index: number) => void;
}

const MovieCard = ({
  item,
  index,
  onPress,
  handleMovieLike,
}: MovieCardProps) => {
  const imageUri = getImageUri(item.poster_path);

  const handlePress = () => {
    onPress(item);
  };

  const toggleLike = () => {
    handleMovieLike(index);
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View style={styles.posterContainer}>
        <Image src={imageUri} style={styles.poster} />
        <View style={styles.blurViewContainerWrapper}>
          <Pressable onPress={toggleLike} style={styles.blurViewContainer}>
            <BlurView intensity={40} style={styles.blurView}>
              <FontAwesomeIcon
                name={"heart"}
                size={24}
                color={item.liked ? "red" : "white"}
              />
            </BlurView>
          </Pressable>
          <View style={[styles.blurViewContainer, styles.ratingContainer]}>
            <BlurView intensity={40} style={styles.blurView}>
              <Text style={styles.ratingText}>
                {item.vote_average?.toPrecision(2)}
              </Text>
              <Text style={styles.ratingFromText}>/10</Text>
            </BlurView>
          </View>
        </View>
      </View>
      <View style={styles.posterInfoContainer}>
        <Text style={styles.posterTitle}>{item.title}</Text>
        <Text style={styles.posterReleaseDate}>{item.release_date}</Text>
      </View>
    </Pressable>
  );
};

export default MovieCard;
