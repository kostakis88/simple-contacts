import React from 'react';
import { connect } from 'react-redux';
import { createContact, deleteContact } from '../actions';

class ContactsList extends React.Component {
    state = {
        name: ''
    };

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    } 

    handleSubmit = (e) => {
        e.preventDefault();
        let contact = {
            name: this.state.name
        }
        this.setState({
            name: ''
        });
        this.props.createContact(contact);
    }

    handleClick = (e, index) => {
        e.preventDefault();
        this.props.deleteContact(index);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.name} onChange={this.handleChange}/>
                <input type="submit" value="ADD" />
                <ul>
                    {this.props.contacts.map((contact, i) => <li key={i}>
                        {contact.name}
                        <button style={{marginLeft: '1rem'}} onClick={ (e) => this.handleClick(e, i) }>
                            DELETE
                        </button>
                    </li>)}
                </ul>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createContact: contact => dispatch(createContact(contact)),
        deleteContact: index => dispatch(deleteContact(index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);