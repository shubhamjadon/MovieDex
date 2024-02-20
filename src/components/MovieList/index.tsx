import { View, Text, FlatList } from "react-native";
import React from "react";
import { MovieObjType } from "../../apis/GetNowPlaying";
import MovieCard from "../MovieCard";
import styles from "./styles";

interface MovieListType {
  list: MovieObjType[];
  loading: boolean;
}

const MovieList = ({ list, loading }: MovieListType) => {
  const keyExtractor = (item: MovieObjType, index: number) =>
    item.id?.toString();

  if (!list.length && loading) {
    <View>
      <Text style={styles.loaderText}>Loading...</Text>
    </View>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={list}
        renderItem={MovieCard}
        contentContainerStyle={styles.listContentContainer}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default MovieList;
