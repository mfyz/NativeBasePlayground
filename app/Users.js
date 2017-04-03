import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
	Container, Header, Title, Content, Footer, FooterTab, Thumbnail,
	Left, Right, Body, Icon, Button, Text, ListItem, List, Segment
} from 'native-base';
import { Actions } from 'react-native-router-flux';

const users = [
	{
		id: 1,
		name:"rick vasquez",
		email:"rick.vasquez@example.com",
		picture:"https://randomuser.me/api/portraits/thumb/men/64.jpg"
	},
	{
		id: 2,
		name:"edgar brewer",
		email:"edgar.brewer@example.com",
		picture:"https://randomuser.me/api/portraits/thumb/men/37.jpg"
	},
	{
		id: 3,
		name:"freddie ross",
		email:"freddie.ross@example.com",
		picture:"https://randomuser.me/api/portraits/thumb/men/8.jpg"
	},
	{
		id: 4,
		name:"heather morales",
		email:"heather.morales@example.com",
		picture:"https://randomuser.me/api/portraits/thumb/women/90.jpg"
	},
	{
		id: 5,
		name:"alex hughes",
		email:"alex.hughes@example.com",
		picture:"https://randomuser.me/api/portraits/thumb/women/29.jpg"
	},
	{
		id: 6,
		name:"alma brooks",
		email:"alma.brooks@example.com",
		picture:"https://randomuser.me/api/portraits/thumb/women/31.jpg"
	},
	{
		id: 7,
		name:"rene smith",
		email:"rene.smith@example.com",
		picture:"https://randomuser.me/api/portraits/thumb/men/37.jpg"
	},
	{
		id: 8,
		name:"paul franklin",
		email:"paul.franklin@example.com",
		picture:"https://randomuser.me/api/portraits/thumb/men/79.jpg"
	},
	{
		id: 9,
		name:"leon nichols",
		email:"leon.nichols@example.com",
		picture:"https://randomuser.me/api/portraits/thumb/men/99.jpg"
	},
	{
		id: 10,
		name:"susie steward",
		email:"susie.steward@example.com",
		picture:"https://randomuser.me/api/portraits/thumb/women/31.jpg"
	}
];

export default class Users extends Component {
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
						<Segment>
							<Button first><Text>1</Text></Button>
							<Button><Text>2</Text></Button>
							<Button last active><Text>3</Text></Button>
						</Segment>
					</Body>
					<Right />
				</Header>
				<Content>
					<List dataArray={users} renderRow={(user)=>
							<ListItem key={user.id}>
								<Thumbnail source={{uri: user.picture}} />
								<Body>
									<Text>{user.name.toUpperCase()}</Text>
									<Text note>{user.email}</Text>
								</Body>
							</ListItem>
						} />
				</Content>
			</Container>
		);
	}
}