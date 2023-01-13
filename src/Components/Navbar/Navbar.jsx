import React, { useState } from 'react';
import { Link } from 'react-router-link';
import DropDown from './DropDown';
import "./Navbar.scss";
import { navItems } from './Navitems';



export default function Navbar() {
	const [dropdown, setDropdown] = useState(false);
	return (
		<>
			<nav className='navbar'>
				<Link to="/" className="navbar-logo">
					Home
				</Link>
				<ul className='nav-items'>
					{navItems.map(item => {
						if (item.title === "Account") {
							return (
								<li key={item.id} className={item.cName}
								onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
									<Link to={item.path} >{item.title}</Link>
									{dropdown && <DropDown/>}
								</li>
							);
						}
						return (
							<li key={item.id} className={item.cName}>
									<Link to={item.path}>{item.title}</Link>
							</li>
						)
					})
					}
				</ul>
				
			</nav>
			
		</>

  )
}
