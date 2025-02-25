import { FaUser, FaPhone } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ id, name, number, delContact }) => {
  const handleDelete = () => {
    if (delContact) {
      delContact(id);
    }
  };
  return (
    <li className={s.listItem}>
      <div className={s.wrapper}>
        <p className={s.info}>
          <FaUser /> {name}
        </p>
        <p className={s.info}>
          <FaPhone /> {number}
        </p>
      </div>
      <button className={s.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
