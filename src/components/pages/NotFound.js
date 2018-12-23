import React, { Component } from 'react'

export const NotFound = ({ location }) =>
    <section>
        <div className="notfound-404">
            <h1>Resource absolutely not found at {location.pathname}</h1>
            <div className="lead">We are so sorry</div>
        </div>
    </section>