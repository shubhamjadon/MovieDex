import { View, FlatList, ActivityIndicator } from "react-native";
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
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#f6f6f6" />
      </View>
    );
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
