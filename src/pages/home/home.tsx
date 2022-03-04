import { imageIndex } from "../../assets/fileIndex";
import { Expierience } from "../../components/expierience/expierience";
import { Skills } from "../../components/skills/skills";
import styles from "./home.module.scss";

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.innerContent}>
        <div className={styles.headline}>AJOT.DEV</div>
        <div className={styles.picAndWelcome}>
          <img src={imageIndex.ProfilePic} alt="Person"></img>
          <h1>Hi, I'm AJ and I am a developer and support engineer.</h1>
        </div>
        <div className={styles.welcomeText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className={styles.skillsContainer}>
          <h2>My Skillset</h2>
          <Skills />
        </div>
        <div className={styles.cvContainer}>
          <h2>My Expierience</h2>
          <Expierience />
        </div>
        <div className={styles.contactContainer}>
          <h2>Contact me here</h2>
        </div>
        <footer>Data Protection </footer>
      </div>
    </div>
  );
};
