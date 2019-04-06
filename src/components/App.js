import React from 'react';
import ContactsList from './ContactsList';

class App extends React.Component{
    render() {
        return (
            <div>
                <h1>Contacts Management</h1>
                <ContactsList />
            </div>
        );
    }
}

export default App;