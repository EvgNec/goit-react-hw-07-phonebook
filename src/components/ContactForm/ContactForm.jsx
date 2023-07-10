import { Input, AddButton, Form, Title } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import Notiflix from 'notiflix';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  console.log('contacts', contacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    console.log('name', name);
    const number = form.number.value;
    console.log('number', number);
    if (contacts.find(existingContact => existingContact.name === name)) {
      Notiflix.Notify.failure(`${name} is already in your contacts`);
      return;
    } else {
      dispatch(addContact(name, number));
      Notiflix.Notify.success(
        `${name} has been successfully added to  your phonebook`
      );
    }
    e.target.reset();
  };

  return (
    <>
      <Title>Phonebook</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
        />
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Number"
        />
        <AddButton type="submit">Add contacts</AddButton>
      </Form>
    </>
  );
};

export default ContactForm;
