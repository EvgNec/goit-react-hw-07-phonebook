import { List, ListItem, DeleteBtn } from './ContactsList.styled';
import { deleteContact } from 'redux/operation';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectVisibleContacts,
  selectFavourites,
  selectFavIsShown,
} from 'redux/selectors';

const ContactList = () => {
  let visibleContacts = useSelector(selectVisibleContacts);
  const favContacts = useSelector(selectFavourites);
  const favIsShown = useSelector(selectFavIsShown);
  const dispatch = useDispatch();
  const contactsToShow = favIsShown ? favContacts : visibleContacts;

  return (
    <>
      <List>
        {contactsToShow.map(({ name, phone, id, isFavourite }) => {
          return (
            <ListItem key={id}>
              {name}: {phone}
              <DeleteBtn
                onClick={() => dispatch(deleteContact(id))}
                type="button"
              >
                Delete
              </DeleteBtn>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default ContactList;
