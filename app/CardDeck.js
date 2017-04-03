import React, { Component } from 'react';
import { Alert, Image, View } from 'react-native';
import {
	Container, Header, Title, Content, Footer, FooterTab,
	Left, Right, Body, Icon, Button, Text, ListItem, Card, CardItem,
	Thumbnail, DeckSwiper
} from 'native-base';
import { Actions } from 'react-native-router-flux';

const cards = [
	{
		avatar: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/7/000/1bc/152/222318b.jpg",
		title: "Amazing View",
		timestamp: "5 minutes ago",
		image: "https://www.maldives.com/wp-content/uploads/2015/07/Velaa-Private-Island-Maldives.jpg",
		desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
	},
	{
		avatar: "https://s-media-cache-ak0.pinimg.com/avatars/betulkarayildiz_1482287680_280.jpg",
		title: "Amazing View 2",
		timestamp: "4:16pm",
		image: "https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2f/ce/maldives.jpg",
		desc: "Aperiam atque cumque dolore fugiat quos! Aut laboriosam, quaerat?"
	},
	{
		avatar: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/7/000/1bc/152/222318b.jpg",
		title: "Amazing View 3",
		timestamp: "Yesterday 4:16pm",
		image: "https://www.maldives.com/wp-content/uploads/2016/10/Kanuhura-Maldives-.jpg",
		desc: "A amet, corporis doloremque esse iusto laudantium mollitia, nulla, quia ratione sit tenetur?"
	},
	{
		avatar: "https://s-media-cache-ak0.pinimg.com/avatars/betulkarayildiz_1482287680_280.jpg",
		title: "Inifinity Pool",
		timestamp: "2 days ago",
		image: "http://www.telegraph.co.uk/content/dam/Travel/hotels/asia/maldives/conrad-rangali-maldives-product.jpg",
		desc: "Aperiam atque cumque dolore fugiat quos! Aut laboriosam, quaerat?"
	}
];

export default class CardDeck extends Component {
	render() {
		return (
			<Container>
				<View style={{ padding: 20, paddingTop: 80 }}>
					<DeckSwiper dataSource={cards} renderItem={item =>
						<Card style={{ elevation: 3 }}>
							<CardItem>
								<Left>
									<Thumbnail source={{uri: item.avatar}} />
									<Body>
										<Text>{item.title}</Text>
										<Text note>{item.timestamp}</Text>
									</Body>
								</Left>
							</CardItem>
							<CardItem cardBody>
								<Image style={{flex: 1, height: 200, backgroundColor: '#efefef'}}
									source={{uri: item.image}} />
							</CardItem>
							<CardItem content>
								<Text>
									Desc
								</Text>
							</CardItem>
						</Card>
					} />
				</View>
			</Container>
		);
	}
}