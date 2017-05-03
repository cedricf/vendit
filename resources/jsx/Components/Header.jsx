import React from 'react';

const Header = (props) => {
	return (
			<div>
				<nav className="navbar navbar-fixed-top">
					<div className="container header">
						<button type="submit" className="btn btn-default header-item">
							<span className="glyphicon glyphicon glyphicon-menu-hamburger"></span>
						</button>
						<a className="header-item" href="#">Vendit v0.1</a>
						<div className="header-item navbar-right">13:45</div>
						<div className="header-item navbar-right">12 April 2016</div>
					</div>
				</nav>
			</div>
    );
};

export default Header 