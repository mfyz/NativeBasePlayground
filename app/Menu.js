import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
	Container, Header, Title, Content, Footer, FooterTab,
	Left, Right, Body, Icon, Button, Text, ListItem
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Menu extends Component {
	render() {
		return (
			<Container>
				<Content style={{ paddingTop: 64 }}>
					<ListItem onPress={Actions.Buttons}>
						<Text>Buttons</Text>
					</ListItem>
					<ListItem onPress={Actions.Cards}>
						<Text>Cards</Text>
					</ListItem>
					<ListItem onPress={Actions.CardDeck}>
						<Text>Card Deck</Text>
					</ListItem>
					<ListItem onPress={Actions.TabBar}>
						<Text>Tab Bar</Text>
					</ListItem>
					<ListItem onPress={Actions.Form}>
						<Text>Form</Text>
					</ListItem>
					<ListItem onPress={Actions.Navbar}>
						<Text>Navbar</Text>
					</ListItem>
					<ListItem onPress={Actions.Lists}>
						<Text>Lists</Text>
					</ListItem>
					<ListItem onPress={Actions.Users}>
						<Text>Users</Text>
					</ListItem>
				</Content>
				<Footer>
					<FooterTab>
						<Button full>
							<Text>Footer Button</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}