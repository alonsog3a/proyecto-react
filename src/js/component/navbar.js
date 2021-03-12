import React from "react";
import ReactDOM from "react-dom";

export function Navbar() {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Start Boostrap
			</a>
			<ul className="nav justify-content-end">
				<li className="nav-item">
					<a className="nav-link active" href="#">
						Active
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Link
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Link
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link disabled"
						href="#"
						tabIndex="-1"
						aria-disabled="true">
						Disabled
					</a>
				</li>
			</ul>
		</nav>
	);
}
