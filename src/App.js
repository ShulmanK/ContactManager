import React, { Component } from "react";
import Header from './components/layout/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact"
import { Provider } from './context';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import {
  Home,
  About,
  Events,
  Products,
  Contact,
  Whoops404,
  AboutMenu
} from './components/react-router-dom/PageTemplate'
import { MainMenu } from './components/react-router-dom/MainMenu'
import { PageTemplate } from './components/react-router-dom/PageTemplate'
import { AboutContact } from "./components/pages/AboutContact"
import { NotFound } from './components/pages/NotFound'
import Test from './components/test/Test'




class App extends Component {
  render() {
    return (
      // Books exersises
      // <HashRouter>
      //   <div className="main container">
      //     <Switch>
      //       <Route exact path="/" component={Home} />
      //       <Route path="/about" component={About} />
      //       <Redirect from="/history" to="/about/history" />
      //       <Redirect from="/services" to="/about/services" />
      //       <Redirect from="/location" to="/about/location" />
      //       <Route path="/events" component={Events} />
      //       <Route path="/products" component={Products} />
      //       <Route path="/contact" component={Contact} />
      //     </Switch>
      //     <Route component={Whoops404} /> 
      //   </div>
      // </HashRouter>


      // Brad Traversy's courses

      <Router>
        <Provider>

          <div className='container col-6'>


            <Header branding='Contact Manager' />
            <Switch>
              {/* <AddContact />
            <Contacts /> */}
              <Route exact path="/" component={Contacts} />
              <Route path="/aboutcontact" component={AboutContact} />
              <Route path="/contact/add" component={AddContact} />
              <Route path="/test" component={Test} />
              <Route path="/contact/edit/:id" component={EditContact} />

              <Route component={NotFound} />

            </Switch>

          </div>
        </Provider>
      </Router>



    )


  }
}

export default App;
