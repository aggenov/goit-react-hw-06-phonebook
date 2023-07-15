import { ContactListItem } from "../ContactListItem/ContactListItem";

import { List } from "./ContactList.styled";

import {  useSelector } from "react-redux";
import { selectContacts, selectFilter } from "redux/selectors";



export const ContactList = () => {

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  
  const filteredContacts = visibleContacts();
  return (
    <>
    <List>    
        {filteredContacts.map(contact => (
            <ContactListItem
              key={contact.id}
              renderListItem={contact}
            />            
          )
        )}    
    </List>  
    </> 
  );
};

