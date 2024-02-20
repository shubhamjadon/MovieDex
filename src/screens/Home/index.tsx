import { View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import {
  GET_NOW_PLAYING_REQUEST,
  TOGGLE_NOW_PLAYING_LIKED,
} from "../../redux/slice/NowPlayingSlice";
import { RootState } from "../../redux/store";
import { HOME_TABS, HOME_TABS_ARR } from "../../constants/constant";
import TabHeader from "../../components/TabHeader";
import MovieList from "../../components/MovieList";
import {
  GET_POPULAR_REQUEST,
  TOGGLE_POPULAR_LIKED,
} from "../../redux/slice/PopularSlice";
import {
  GET_TOP_RATED_REQUEST,
  TOGGLE_TOP_RATED_LIKED,
} from "../../redux/slice/TopRatedSlice";
import {
  GET_UPCOMING_REQUEST,
  TOGGLE_UPCOMING_LIKED,
} from "../../redux/slice/UpcomingSlice";
import { MovieObjType } from "../../apis/GetNowPlaying";

const Home = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const { data: nowPlayingArr, isLoading: isNowPlayingLoading } = useSelector(
    (state: RootState) => state.NowPlayingSlice
  );
  const { data: popularArr, isLoading: isPopularLoading } = useSelector(
    (state: RootState) => state.PopularSlice
  );
  const { data: topRatedArr, isLoading: isTopRatedLoading } = useSelector(
    (state: RootState) => state.TopRatedSlice
  );
  const { data: upcomingArr, isLoading: isUpcomingLoading } = useSelector(
    (state: RootState) => state.UpcomingSlice
  );

  const [selectedTab, setSelectedTab] = useState(HOME_TABS.NOW_PLAYING);

  useEffect(() => {
    fetchData();
  }, [selectedTab]);

  const fetchData = () => {
    switch (selectedTab) {
      case HOME_TABS.NOW_PLAYING:
        !nowPlayingArr.length && dispatch(GET_NOW_PLAYING_REQUEST());
        break;
      case HOME_TABS.POPULAR:
        !popularArr.length && dispatch(GET_POPULAR_REQUEST());
        break;
      case HOME_TABS.TOP_RATED:
        !topRatedArr.length && dispatch(GET_TOP_RATED_REQUEST());
        break;
      default:
        !upcomingArr.length && dispatch(GET_UPCOMING_REQUEST());
        break;
    }
  };

  const handleTabPress = (newSelectedTab: number) => {
    setSelectedTab(newSelectedTab);
  };

  const renderData = useMemo(() => {
    switch (selectedTab) {
      case HOME_TABS.NOW_PLAYING:
        return { data: nowPlayingArr, loading: isNowPlayingLoading };
      case HOME_TABS.POPULAR:
        return { data: popularArr, loading: isPopularLoading };
      case HOME_TABS.TOP_RATED:
        return { data: topRatedArr, loading: isTopRatedLoading };
      default:
        return { data: upcomingArr, loading: isUpcomingLoading };
    }
  }, [
    selectedTab,
    nowPlayingArr,
    isNowPlayingLoading,
    popularArr,
    isPopularLoading,
    topRatedArr,
    isTopRatedLoading,
    upcomingArr,
    isUpcomingLoading,
  ]);

  const handleMoviePress = (movieData: MovieObjType) => {
    navigate("MovieDetail", { movieData });
  };

  const handleToggleMovieLike = (index: number) => {
    switch (selectedTab) {
      case HOME_TABS.NOW_PLAYING:
        dispatch(TOGGLE_NOW_PLAYING_LIKED(index));
        return;
      case HOME_TABS.POPULAR:
        dispatch(TOGGLE_POPULAR_LIKED(index));
        return;
      case HOME_TABS.TOP_RATED:
        dispatch(TOGGLE_TOP_RATED_LIKED(index));
        return;
      default:
        dispatch(TOGGLE_UPCOMING_LIKED(index));
        return;
    }
  };

  return (
    <View style={styles.container}>
      <TabHeader
        selectedTab={selectedTab}
        tabsArr={HOME_TABS_ARR}
        handleTabPress={handleTabPress}
      />
      <View style={styles.container}>
        <MovieList
          list={renderData.data}
          loading={renderData.loading}
          onItemPress={handleMoviePress}
          handleMovieLike={handleToggleMovieLike}
        />
      </View>
    </View>
  );
};

export default Home;
