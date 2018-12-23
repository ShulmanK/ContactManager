import React, { Component } from 'react'

class AddContact extends Component {
    constructor(props) {
        super(props);
       this.nameInput = React.createRef()
       this.emailInput = React.createRef()
       this.phoneInput = React.createRef()

    }


   

    static defaultProps = {
        name: 'Bradly Couper',
        email:'couper@mail.com',
        phone:'898765-98765'
    }
    onSubmit = (e) => {
        e.preventDefault();
       const contacts = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
       }
        console.log(contacts)
    }

    render() {
        const { name, phone, email } = this.props
        return (
            <div className="card">
                <div className="card-header"><h5>Add Contact</h5></div>
                <div className="card-body">
                    <form
                        onSubmit={this.onSubmit}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                placeholder='Enter name...'
                                name='name'
                                className="form-control form-control-lg"
                                defaultValue={name}
                                ref={this.nameInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder='Enter email...'
                                name='email'
                                className="form-control form-control-lg"
                                defaultValue={email}
                                ref={this.emailInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                placeholder='Enter phone...'
                                name='phone'
                                className="form-control form-control-lg"
                                defaultValue={phone}
                                ref={this.phoneInput}
                            />
                        </div>
                        <input
                            type="submit"
                            value="Add contact"
                            className="btn btn-block bg-light border"
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact;