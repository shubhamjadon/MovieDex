import { View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import { GET_NOW_PLAYING_REQUEST } from "../../redux/slice/NowPlayingSlice";
import { RootState } from "../../redux/store";
import { HOME_TABS, HOME_TABS_ARR } from "../../constants/constant";
import TabHeader from "../../components/TabHeader";
import MovieList from "../../components/MovieList";

const Home = () => {
  const dispatch = useDispatch();
  const { data: NowPlayingArr, isLoading } = useSelector(
    (state: RootState) => state.NowPlayingSlice
  );
  const [selectedTab, setSelectedTab] = useState(HOME_TABS.NOW_PLAYING);

  useEffect(() => {
    // dispatch(GET_NOW_PLAYING_REQUEST());
  }, []);

  const handleTabPress = (newSelectedTab: number) => {
    setSelectedTab(newSelectedTab);
  };

  const renderData = useMemo(() => {
    switch (selectedTab) {
      case HOME_TABS.NOW_PLAYING:
        return { data: NowPlayingArr, loading: isLoading };
      case HOME_TABS.POPULAR:
        return { data: NowPlayingArr, loading: isLoading };
      case HOME_TABS.TOP_RATED:
        return { data: NowPlayingArr, loading: isLoading };
      default:
        return { data: NowPlayingArr, loading: isLoading };
    }
  }, [selectedTab, NowPlayingArr, isLoading]);

  return (
    <View style={styles.container}>
      <TabHeader
        selectedTab={selectedTab}
        tabsArr={HOME_TABS_ARR}
        handleTabPress={handleTabPress}
      />
      <View style={styles.container}>
        <MovieList list={renderData.data} loading={renderData.loading} />
      </View>
    </View>
  );
};

export default Home;
