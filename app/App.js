import { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Menu from './Menu';
import Buttons from './Buttons';
import Cards from './Cards';
import CardDeck from './CardDeck';
import TabBar from './TabBar';
import Form from './Form';
import Navbar from './Navbar';
import Lists from './Lists';
import Users from './Users';

export default class NativeBasePg extends Component {
	render() {
		return (
			<Router>
				<Scene key="root">
					<Scene key="Menu" component={Menu} title="Welcome" initial={true} />
					<Scene key="Buttons" component={Buttons} title="Buttons" />
					<Scene key="Cards" component={Cards} title="Cards" />
					<Scene key="CardDeck" component={CardDeck} title="Card Deck" />
					<Scene key="TabBar" component={TabBar} title="Tab Bar" />
					<Scene key="Form" component={Form} title="Form" />
					<Scene key="Navbar" component={Navbar} title="Navbar" hideNavBar />
					<Scene key="Lists" component={Lists} title="Lists" />
					<Scene key="Users" component={Users} title="Users" hideNavBar />
				</Scene>
			</Router>
		);
	}
}