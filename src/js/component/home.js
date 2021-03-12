import React from "react";
import ReactDOM from "react-dom";

import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		</>
	);
}
