import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { TabType } from "../../constants/constant";
import styles from "./styles";

interface TabHeaderProps {
  selectedTab: number;
  tabsArr: TabType[];
  handleTabPress: (id: number) => void;
}

const TabHeader = ({
  selectedTab,
  tabsArr,
  handleTabPress,
}: TabHeaderProps) => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
      >
        {tabsArr.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => handleTabPress(item.id)}
            style={styles.tab}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === item.id && styles.tabTextSelected,
              ]}
            >
              {item.title}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default TabHeader;
