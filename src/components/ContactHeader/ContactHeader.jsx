import styles from "./ContactHeader.module.css";
const ContactHeader = () => {
  return (
    <div className={`${styles.contact_section}`}>
      <h1>CONTACT US</h1>
      <p>
      I hope you're doing well. I am a student interested in course/program name and would like more information regarding the curriculum, fees, and enrollment process. Please let me know the necessary details at your convenience.
      </p>
    </div>
  );
};

export default ContactHeader;