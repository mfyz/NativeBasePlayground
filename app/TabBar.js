import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
	Container, Header, Title, Content, Footer, FooterTab,
	Left, Right, Body, Icon, Button, Text, ListItem
} from 'native-base';

export default class TabBar extends Component {
	render() {
		return (
			<Container>
				<Content style={{ paddingTop: 64 }}>
					<Text style={{ padding: 20 }}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum dolore dolores dolorum
						earum ex, excepturi id illo, impedit itaque iure iusto laborum minus nemo odio possimus,
						sapiente tenetur voluptas?
					</Text>
				</Content>
				<Footer>
					<FooterTab>
						<Button>
							<Icon name="apps" />
							<Text>Apps</Text>
						</Button>
						<Button>
							<Icon name="camera" />
							<Text>Camera</Text>
						</Button>
						<Button active>
							<Icon name="navigate" />
							<Text>Navigate</Text>
						</Button>
						<Button>
							<Icon name="contacts" />
							<Text>Contact</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}