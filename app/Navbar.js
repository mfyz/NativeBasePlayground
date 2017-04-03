import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
	Container, Header, Title, Content, Footer, FooterTab, Subtitle,
	Left, Right, Body, Icon, Button, Text, ListItem
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Navbar extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Left>
						<Button transparent onPress={Actions.pop}>
							<Icon name="arrow-back" />
						</Button>
					</Left>
					<Body>
						<Title>Custom Nav</Title>
						<Subtitle>Subtitle</Subtitle>
					</Body>
					<Right>
						<Button transparent>
							<Icon name="more" style={{color: 'red'}} />
						</Button>
					</Right>
				</Header>
				<Content>
					<Text style={{ padding: 20 }}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laboriosam tenetur
						voluptates! Ab amet aperiam architecto debitis, dignissimos dolorem dolores doloribus
						earum illo, maxime nemo quasi quidem quis quod, ut?
					</Text>
				</Content>
			</Container>
		);
	}
}