import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Contact extends Component {
  state = {
    showClick: false
  }
  deleteUser = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      dispatch({ type: 'DELETE_CONTACT', payload: id })
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id })
    }

  }

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showClick } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mt-3">
              <div className="card-body">
                <h3 className="card-title">{name}
                  <i
                    className="fas fa-caret-down"
                    style={{ cursor: 'pointer' }}
                    onClick={() => this.setState({ showClick: !this.state.showClick })}
                  ></i>
                  <i
                    className="fas fa-times"
                    style={{ float: 'right', cursor: 'pointer', color: 'red' }}
                    onClick={this.deleteUser.bind(this, id, dispatch)}
                  ></i>
                  <Link
                    to={`contact/edit/${id}`}>
                    <i
                      className="fas fa-pen"
                      style={{ float: 'right', cursor: 'pointer', marginRight: '10px', color: 'black' }}
                    ></i>

                  </Link>



                </h3>
                {showClick ? (<ul className="list-group ">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>) : null}

              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact; 