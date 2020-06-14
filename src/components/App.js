import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Game from './components/Game';
import Stats from './components/Stats';

function App() {
	return(
		<BrowserRouter>
		<Route path="/index" component={Game}/>
		<Route path="/stats" component={Stats}/>
		</BrowserRouter>
		)

}

export default App