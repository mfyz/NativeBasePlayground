import React, { Component } from 'react';
import { Alert, Image } from 'react-native';
import {
	Container, Header, Title, Content, Footer, FooterTab,
	Left, Right, Body, Icon, Button, Text, ListItem, Card, CardItem,
	Thumbnail
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Cards extends Component {
	render() {
		return (
			<Container>
				<Content style={{ padding: 20, paddingTop: 80 }}>
					<Card>
						<CardItem>
							<Body>
								<Text>Card Style</Text>
							</Body>
						</CardItem>
					</Card>

					<Card>
						<CardItem>
							<Left>
								<Thumbnail source={{ uri: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/7/000/1bc/152/222318b.jpg" }} />
								<Body>
									<Text>Amazing View</Text>
									<Text note>Yesterday 4:16pm</Text>
								</Body>
							</Left>
						</CardItem>
						<CardItem cardBody>
							<Image style={{ flex: 1, height: 200, backgroundColor: '#efefef' }}
								source={{ uri: "https://www.maldives.com/wp-content/uploads/2015/07/Velaa-Private-Island-Maldives.jpg" }} />
						</CardItem>
						<CardItem content>
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Adipisci, facilis laboriosam? Accusantium aliquam commodi
								consequatur doloremque est, eveniet exercitationem maxime,
								necessitatibus numquam porro quae quas quasi quibusdam,
								rerum tenetur ullam.
							</Text>
						</CardItem>
						<CardItem>
							<Button transparent>
								<Icon active name="thumbs-up" />
								<Text>12 Likes</Text>
							</Button>
							<Button transparent>
								<Icon active name="chatbubbles" />
								<Text>4 Comments</Text>
							</Button>
						</CardItem>
					</Card>

					<Card>
						<CardItem>
							<Icon name="alarm" />
							<Text>List Item 1</Text>
							<Right>
								<Icon name="arrow-forward" />
							</Right>
						</CardItem>
						<CardItem>
							<Icon name="call" />
							<Text>List Item 2</Text>
							<Right>
								<Icon name="arrow-forward" />
							</Right>
						</CardItem>
						<CardItem>
							<Icon name="attach" />
							<Text>List Item 3</Text>
							<Right>
								<Icon name="arrow-forward" />
							</Right>
						</CardItem>
						<CardItem>
							<Icon name="trash" style={{color: 'red'}} />
							<Text style={{color: 'red'}}>List Item 3</Text>
							<Right>
								<Icon name="arrow-forward" />
							</Right>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}