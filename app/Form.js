import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import {
	Container, Header, Title, Content, Footer, FooterTab,
	Left, Right, Body, Icon, Button, Text, ListItem, Item, Label,
	Input, InputGroup
} from 'native-base';

export default class Form extends Component {
	constructor(props){
		super(props);

		this.state = {
			first_name: null,
			last_name: null,
			password: null,
			gender: null,
			tos_selected: false
		}
	}

	render() {
		return (
			<Container>
				<Content style={{ paddingTop: 64 }}>
					<View style={{ padding: 20 }}>
						<Item inlineLabel>
							<Label>First Name (Inline)</Label>
							<Input />
						</Item>
						<View style={{ height: 30 }} />
						<Item floatingLabel>
							<Label>Last Name (Floating)</Label>
							<Input />
						</Item>
						<InputGroup>
							<Icon name="call" />
							<Input placeholder="Phone Number" keyboardType="numeric" />
						</InputGroup>
						<InputGroup>
							<Icon name="lock" />
							<Input placeholder="Password" secureTextEntry />
						</InputGroup>
						<Item inlineLabel error>
							<Label>Error</Label>
							<Input />
							<Icon name="close-circle" />
						</Item>
						<Item inlineLabel success>
							<Label>Success</Label>
							<Input />
							<Icon name="checkmark-circle" />
						</Item>
						<View style={{ height: 30 }} />
						<Item stackedLabel>
							<Label>Address</Label>
							<Input placeholder="123 Street" />
						</Item>
					</View>
				</Content>
			</Container>
		);
	}
}