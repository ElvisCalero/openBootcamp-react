import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contactComponent';

const ContactListComponent = () => {
    const defaultContact = new Contact('Elvis', 'Calero', 'elviscalero962010@gmail.com', true);
    return (
        <div>
            <div>
            Your Contacts:
            </div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>        
    );
};


ContactListComponent.propTypes = {

};


export default ContactListComponent;
