import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios'

class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };
    async componentDidMount() {
        const { id } = this.props.match.params
        console.log(id)

        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const contact = res.data;
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
    }
    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const { errors, name, email, phone } = this.state;
        //Check for Errors
        if (name === '') {
            this.setState({ errors: { name: 'Name is required' } });
            return;
        }
        if (email === '') {
            this.setState({ errors: { email: 'Email is required' } });
            return;
        }
        if (phone === '') {
            this.setState({ errors: { phone: 'Phone is required' } });
            return;
        }
        const updateContact = {
            name,
            email,
            phone
        }
        const { id } = this.props.match.params;
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,
            updateContact)
        dispatch({type:'UPDATE_CONTACT', payload:res.data})




        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })
        this.props.history.push('/')
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })
    render() {
        const { errors, name, phone, email } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return (
                        < div className="card" >
                            <div className="card-header"><h5>Edit Contact</h5></div>
                            <div className="card-body">
                                <form
                                    onSubmit={this.onSubmit.bind(this, dispatch)}
                                >
                                    <TextInputGroup
                                        label="Name"
                                        type="text"
                                        placeholder="Enter your Name ..."
                                        name="name"
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        type="email"
                                        placeholder="Enter your Email ..."
                                        name="email"
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        type="text"
                                        placeholder="Enter your Phone ..."
                                        name="phone"
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />
                                    <input
                                        type="submit"
                                        value="Update contact"
                                        className="btn btn-block bg-light border"
                                    />
                                </form>
                            </div>
                        </div>
                    )
                }
                }
            </Consumer>
        )
    }
}

export default EditContact;