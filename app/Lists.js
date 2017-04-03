import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
	Container, Header, Title, Content, Footer, FooterTab,
	Left, Right, Body, Icon, Button, Text, ListItem, List
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Lists extends Component {
	render() {
		return (
			<Container>
				<Content style={{ paddingTop: 64 }}>
					<List>
						<ListItem itemDivider>
							<Text>A</Text>
						</ListItem>
						<ListItem>
							<Text>Ahmet</Text>
						</ListItem>
						<ListItem>
							<Text>Arif</Text>
						</ListItem>
						<ListItem>
							<Text>Akif</Text>
						</ListItem>
						<ListItem itemDivider>
							<Text>B</Text>
						</ListItem>
						<ListItem>
							<Text>Berk</Text>
						</ListItem>
						<ListItem>
							<Text>Burak</Text>
						</ListItem>
						<ListItem>
							<Text>Bugra</Text>
						</ListItem>
						<ListItem>
							<Text>Bekir</Text>
						</ListItem>
						<ListItem itemDivider>
							<Text>C</Text>
						</ListItem>
						<ListItem>
							<Text>Can</Text>
						</ListItem>
						<ListItem>
							<Text>Cihan</Text>
						</ListItem>
						<ListItem>
							<Text>Cenk</Text>
						</ListItem>
						<ListItem itemDivider>
							<Text>D</Text>
						</ListItem>
						<ListItem>
							<Text>Doruk</Text>
						</ListItem>
						<ListItem>
							<Text>Daghan</Text>
						</ListItem>
					</List>
				</Content>
			</Container>
		);
	}
}