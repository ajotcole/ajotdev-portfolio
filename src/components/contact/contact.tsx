import styles from "./contact.module.scss";
import { MdEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";

export const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.emailContainer}>
        <MdEmail size={32} />
        <div>E-Mail</div>
      </div>
      <div className={styles.linkedinContainer}>
        <SiLinkedin size={32} />
        <div>LinkedIn</div>
      </div>
    </div>
  );
};
