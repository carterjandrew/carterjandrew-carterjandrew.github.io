import { NavLink } from "react-router-dom";

export default function FourOhFour() {
	return (
		<>
			<div id='bigname' style={{ display: 'flex', width: '100%', flexGrow: 1, justifyContent: 'center', alignItems: 'start', flexDirection: 'column', paddingLeft: '30%' }}>

				<h1>Oh No...</h1>
				<h1>404</h1>
				<h1>Not Found</h1>
				<text>You've hit a dead end</text>
			</div>
			<div>
				<span>
					<p> Click any of the navbar buttons to find your way home, or <NavLink to='/about'>click here</NavLink> to send me an email about a missing page! </p>
				</span>
			</div>
		</>
	)
}
