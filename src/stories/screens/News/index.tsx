import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";

import { Image, View } from "react-native";

import styles from "./styles";
export interface Props {
	navigation: any;
	list: any;
  }
export interface State {}

class News extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body>
            <Title>Các bài viết mới</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon
                active
                name="log-in"
                onPress={() => this.props.navigation.navigate("Login")}
              />
            </Button>
            <Button transparent>
              <Icon
                active
                name="search"
                onPress={() => this.props.navigation.navigate("Login")}
              />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            {this.props.list.map((item, i) => (
              <ListItem
                style={styles.item}
                key={i}
                onPress={() =>
                  this.props.navigation.navigate("Post", {
                    name: { item }
                  })}
              >
                <View style={styles.itemHeader}>
                  <View style={styles.itemAvatar}>
                    <Image
                      style={{width: 50, height: 50, borderRadius: 25}}
                      source={{uri: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/p40x40/32260818_1842940525751056_6312713214782078976_n.jpg?_nc_cat=103&_nc_ht=scontent.fhan2-1.fna&oh=66386ff61099c3d018d98ef65ab63c35&oe=5C6FF586'}}
                    />
                  </View>
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemAuthor}>Tuấn Anh</Text>
                    <Text style={styles.itemCreatedAt}>Hôm qua lúc 4:57</Text>
                  </View>
                </View>
                <View style={styles.itemContent}>
                  <Image
                    style={styles.itemImage}
                    source={{uri: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/c1.0.294.154/p296x100/44841600_6120333486471_4324684724476837888_n.png.jpg?_nc_cat=102&efg=eyJxZV9ncm91cHMiOlsibm9fc2FmZV9pbWFnZV9mb3JfYWRzX2ltYWdlIl19&_nc_ht=scontent.fhan2-1.fna&oh=dc23a35a48cc55bedd32f011a81c06d9&oe=5C80555E'}}></Image>
                  <View style={styles.itemTitle}>
                    <Text style={styles.itemTitleText}>Android và Ios: Anh em thích bàn phím ảo nào nhất</Text>
                  </View>
                  <View style={styles.itemDescription}>
                    <Text>iOS 11 đã cung cấp cho người dùng khả năng kéo và thả văn bản trên máy tính bảng. Android cũng cho phép dễ dàng kéo và thả nội dung từ ứng dụng đến ứng dụng khác và bạn có thể làm điều đó trên điện thoại thông minh. Tính năng này đã được đưa lên Android Nougat nên để tới được các smartphone khác thì còn phụ thuộc vào những nhà sản xuất khai phiên bản của Android.</Text>
                  </View>
                </View>
                <View style={styles.itemFooter}>
                  <View style={{flex:2, flexDirection:"row"}}>
                    <View style={styles.itemFooterIcon}>
                      <Icon
                        style={{fontSize: 20, color: "grey"}}
                        active
                        name="log-in"
                        onPress={() => this.props.navigation.navigate("Login")}
                      />
                    </View>
                    <Text style={{color: '#ddd'}}>21</Text>
                  </View>
                  <View style={{flex:1, flexDirection:"row"}}>
                    <View style={styles.itemFooterIcon}>
                      <Icon
                        style={{fontSize: 20, color: "grey"}}
                        active
                        name="log-in"
                        onPress={() => this.props.navigation.navigate("Login")}
                      />
                    </View>
                    <Text style={{color: '#ddd'}}>21</Text>
                  </View>
                  <View style={{flex:1, flexDirection:"row", justifyContent:"flex-end", alignContent:"flex-end", alignItems: "flex-end"}}>
                    <View style={styles.itemFooterIcon}>
                      <Icon
                        style={{fontSize: 20, color: "grey"}}
                        active
                        name="log-in"
                        onPress={() => this.props.navigation.navigate("Login")}
                      />
                    </View>
                    <Text style={{color: '#ddd'}}>21</Text>
                  </View>
                </View>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
		);
	}
}

export default News;