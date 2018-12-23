import React, { Component } from 'react'
import { MainMenu } from './MainMenu'
import { FaDribbble } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
import { BrowserRouter, Route, Link, HashRouter, Switch } from 'react-router-dom'

const selectedStyle = {
    background: "white",
    color: "slategray",
    width: "100px"
}


export const PageTemplate = ({ children }) =>
    <div className="page">
        <MainMenu />
        {children}
    </div>

export const Home = () =>
    <PageTemplate>
        <section className="about">
            {/* <h1>[About the Company]</h1> */}
        </section>
    </PageTemplate>


export const About = ({ match }) =>
    <PageTemplate>
        <section className="about">
            <Route component={AboutMenu} />
            <Route exact path="/about" component={Company} />
            <Route path="/about/history" component={History} />
            <Route path="/about/services" component={Services} />
            <Route path="/about/location" component={Location} />
        </section>
    </PageTemplate>

export const AboutMenu = ({ match }) =>
    <div className="about-menu">
        <li>
            <NavLink
                to="/about"
                style={match.isExact && selectedStyle}>
                [Company]
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about/history"
                activeStyle={selectedStyle}>
                [History]
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about/services"
                activeStyle={selectedStyle}>
                [Services]
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about/location"
                activeStyle={selectedStyle}>
                [Location]
            </NavLink>
        </li>

    </div>

export const Company = () =>
    <section className="company">
        <h2>Best company ever</h2>
        <p>
            Best company ever in the WORLD
        </p>
    </section>

export const Services = () =>
    <section className="services">
        <h2>Our services</h2>
        <p>
            Services Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ducimus similique distinctio sequi repellat tenetur a laborum, in consectetur atque corporis explicabo accusantium rem suscipit dignissimos porro facilis deserunt quasi!
        </p>
    </section>


export const History = () =>
    <section className="history">
        <h2>Our History</h2>
        <p>
            History Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ducimus similique distinctio sequi repellat tenetur a laborum, in consectetur atque corporis explicabo accusantium rem suscipit dignissimos porro facilis deserunt quasi!
        </p>
    </section>

export const Location = () =>
    <section className="location">
        <h2>Our location</h2>
        <p>
            Location Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ducimus similique distinctio sequi repellat tenetur a laborum, in consectetur atque corporis explicabo accusantium rem suscipit dignissimos porro facilis deserunt quasi!
        </p>
    </section>




export const Events = () =>
    <PageTemplate>
        <section className="events">
            <h1>[Events Calendar]</h1>
        </section>
    </PageTemplate>

export const Products = () =>
    <PageTemplate>
        <section className="products">
            <h1>[Products Catalog]</h1>
        </section>
    </PageTemplate>

export const Contact = () =>
    <PageTemplate>
        <section className="contact">
            <h1>[Contact Us]</h1>
        </section>
    </PageTemplate>
export const Whoops404 = ({ location }) =>
    <section>
        <div className="whoops-404">
            <h1>Resource not found at {location.pathname}</h1>
        </div>
    </section>






