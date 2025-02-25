import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaPhone } from "react-icons/fa";
import s from "./Contact.module.css";
import { removeContact } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const delContact = (id) => {
    dispatch(removeContact(id));
  };

  return (
    <div>
      <ul className={s.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={s.listItem}>
            <div className={s.wrapper}>
              <p className={s.info}>
                <FaUser />
                {name}
              </p>
              <p className={s.info}>
                <FaPhone />
                {number}
              </p>
            </div>
            <button className={s.deleteButton} onClick={() => delContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
