import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
	Container, Header, Title, Content, Footer, FooterTab, Toast,
	Left, Right, Body, Icon, Button, Text, ListItem, Spinner
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Buttons extends Component {
	render() {
		return (
			<Container>
				<Content style={{ paddingTop: 64 }}>
					<Button full iconLeft success
						buttonText="Back" onPress={Actions.pop}>
						<Icon name="arrow-back" />
						<Text>Back</Text>
					</Button>

					<Button rounded primary
						style={{ margin: 10 }}
						onPress={()=> Toast.show({
							text: 'Wrong password!',
							position: 'bottom',
							buttonText: 'Okay'
			            })}>
						<Icon name="home" />
					</Button>

					<Button danger bordered large
						style={{ margin: 10 }}>
						<Icon name="beer" />
					</Button>

					<Button danger disabled small
						style={{ margin: 10 }}>
						<Text>Disabled?</Text>
					</Button>

					<Spinner color='gray' style={{transform:[{ scale: 0.5 }]}} />
					<Spinner color='red' />
				</Content>
			</Container>
		);
	}
}