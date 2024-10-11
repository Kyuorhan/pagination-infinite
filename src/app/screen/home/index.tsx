import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";
import styles from "./styles";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Followers, ListFollowers, GithubUser } from "@/types/GitHub";
import { Octicons } from "@expo/vector-icons";
import { colors, fontSize } from "@/theme";
import Header from "@/app/components/Header";

interface HomeProps {
  navigation: NavigationProp<ParamListBase>;
}

export default function Home({ navigation }: HomeProps) {
  const [followers, setFollowers] = useState<Followers[]>([]);
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState<{
    [key: string]: GithubUser;
  }>({});
  const username = "Kyuohran";

  // useEffect(() => {
  //   const getFollowers = async () => {
  //     const data = await fetchFollowers(username);
  //     setFollowers(data);
  //   getFollowers();
  // }, []);

  // useEffect(() => {
  //   const getFollowers = async () => {
  //     const data = await fetchFollowers("Kyuorhan");
  //     setFollowers(data);
  //   };
  //   getFollowers();
  // }, []);

  const renderItem = ({ item }: { item: Followers }) => {
    // const details = userDetails[item.login] || {};

    return (
      <View style={styles.followerContainer}>
        <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>
            {item.user.name ? item.user.name : item.login}
          </Text>
          {item.user.bio && <Text style={styles.bio}>{item.user.bio}</Text>}
          <ScrollView horizontal contentContainerStyle={styles.details}>
            {item.user.company && (
              <View style={styles.itemDetails}>
                <Octicons
                  name="organization"
                  size={fontSize.xl}
                  color={colors.base.gray200}
                />
                <Text style={styles.company}>{item.user.company}</Text>
              </View>
            )}
            {item.user.location && (
              <View style={styles.itemDetails}>
                <Octicons
                  name="location"
                  size={fontSize.xl}
                  color={colors.base.gray200}
                />
                <Text style={styles.location}>{item.user.location}</Text>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header namedTitle={"GitHub User´s"} />
      <FlatList
        data={ListFollowers}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            // onRefresh={() => {
            //   setLoading(true);
            //   // fetchFollowers(username).then((data) => {
            //   //   setFollowers(data);
            //   //   setLoading(false);
            //   // });
            // }}
            tintColor={colors.brand.purple}
          />
        }
      />
    </View>
  );
}
