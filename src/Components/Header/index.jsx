import React from "react";
import "./head.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function index() {
  return (
    <header className="header ">
      <div className="header__wrapper">
        <div className="header__container _container">
          <div className="header__body">
            <div className="header__main">
              <a href="" className="header__logo">
                Funiro.
              </a>
              <div className=" header__menu menu">
                {/* Выпадающий список */}
			          <nav className="menu__body">
			           	<div className="menu__list">
				          	<li className="menu__item">
                      <a href="" className="menu__link">Products</a>
                     <button type="button" className="menu__arrow _icon-arrow-down"><FontAwesomeIcon icon={faChevronDown}/> </button> 
                      <ul className="menu__sub-list">
                        <li className="menu__sub-item">
                          <a className="menu__sub-link">Product1</a>
                        </li>
                        <li className="menu__sub-item">
                          <a className="menu__sub-link">Product2</a>
                        </li>
                        <li className="menu__sub-item">
                          <a className="menu__sub-link">Product3</a>
                        </li>
                        <li className="menu__sub-item">
                          <a className="menu__sub-link">Product4</a>
                        </li>  
                      </ul>
                    </li>

                    <li className="menu__item">
                      <a href="" className="menu__link">Rooms</a>
                 <button type="button" className="menu__arrow _icon-arrow-down"><FontAwesomeIcon icon={faChevronDown}/> </button> 
                      <ul className="menu__sub-list">
                        <li className="menu__sub-item">
                          <a className="menu__sub-link">Product1</a>
                        </li>
                        <li className="menu__sub-item">
                          <a className="menu__sub-link">Product2</a>
                        </li>
                        <li className="menu__sub-item">
                          <a className="menu__sub-link">Product3</a>
                        </li>
                        <li className="menu__sub-item">
                          <a className="menu__sub-link">Product4</a>
                        </li>  
                      </ul>
                    </li>
                    <li className="menu__item">
                      <a href="" className="menu__link">Inspirations</a>
                    <button type="button" className="menu__arrow _icon-arrow-down"><FontAwesomeIcon icon={faChevronDown}/> </button> 
                      <ul className="menu__sub-list">
                        <li className="menu__sub-item">
                          <a className="menu__sub-link">Product1</a>
                        </li>
                        <li className="menu__sub-item">
                          <a className="menu__sub-link">Product2</a>
                        </li>
                        <li className="menu__sub-item">
                          <a className="menu__sub-link">Product3</a>
                        </li>
                        <li className="menu__sub-item">
                          <a className="menu__sub-link">Product4</a>
                        </li>  
                      </ul>
				          	</li>
			          	</div>
                </nav>
	          </div>
            </div>
            <div className="header__search">
              <div className="search__form">
                <button type="button" className="search-form__icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                <form action="#" className="search-form_btn">
                  <button type="submit" className="search-form__icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                <input  autoComplete="off" type="text" name="form[]" data-value="Search for minimalist chair" className="search-form__input"/>
                </form>
              </div>
            </div>
            <div className="header__actions actions-header">
              <a href="" className="actions-header__item  actions-header__item_favorites _icon-favorite"></a>
              <div className="actions-header__item card-header">
                <a href="" className="cart-header__icon _icon-cart"></a>
                <div className="cart-header__body">
                  <ul className="cart-header__list cart-list"></ul>
                </div>
              </div>
              <a href="" className="actions-header__item actions-header__item_user _ibg">
                <img src="../../image//Ellipse 2.png" alt="Avatar" />
              </a>
          </div>
        	<button type='button' className="icon-menu">
	        	    <span></span>
				        <span></span>
				        <span></span>
            </button>
            </div>
          </div>
      </div>
    </header>
  );
}
