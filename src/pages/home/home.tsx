import { Panel, PanelType } from "@fluentui/react";
import { imageIndex } from "../../assets/fileIndex";
import { Contact } from "../../components/contact/contact";
import { Expierience } from "../../components/expierience/expierience";
import { Skills } from "../../components/skills/skills";
import styles from "./home.module.scss";
import { useBoolean } from "@fluentui/react-hooks";

export const Home = () => {
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] =
    useBoolean(false);
  return (
    <div className={styles.homeContainer}>
      <div className={styles.innerContent}>
        <div className={styles.headline}>AJOT.DEV</div>
        <div className={styles.picAndWelcome}>
          <img src={imageIndex.ProfilePic} alt="Person"></img>
          <h1>Hi, I'm AJ and I am a developer and support engineer.</h1>
        </div>
        <div className={styles.welcomeText}>
          <div>
            After gaining several years of design experience in my
            apprenticeship in Media design, I decided to put my technological
            focus on JavaScript in order to combine my knowledge to create
            well-designed and well functioning projects. While developing, I've
            always tried to integrate up-to-date cloud technologies in my
            projects and clear structure. In the last year I was also able to
            gain knowledge in support engineering for platforms such a Windows
            Server, Microsoft 365 and Azure.
          </div>
          <div>
            In my private time, I like to build smart home and automation
            solutions using easy to access platforms such as Raspberry Pis or
            ESP32. I was able to integrate "HomeAssistant" in my private home
            and integrate all of my smart home devices in a single system.
          </div>
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
          <Contact />
        </div>
        <footer>
          <span style={{ cursor: "pointer" }} onClick={() => openPanel()}>
            Data Protection
          </span>
        </footer>
      </div>
      <Panel
        isLightDismiss
        isOpen={isOpen}
        onDismiss={dismissPanel}
        type={PanelType.medium}
        headerText="Impressum"
      >
        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <p>
          Alexander James Cole
          <br />
          Ohlsdorfer Straße 72
          <br />
          22297 Hamburg
          <br />
          Deutschland
        </p>
        <h2>Kontakt</h2>
        <p>
          Telefon: +49 151 59826270
          <br />
          E-Mail: ajot.dev@outlook.com
        </p>
        <h2>Verantwortlich f&uuml;r den Inhalt nach &sect; 55 Abs. 2 RStV</h2>
        <p>Alexander James Cole</p>
        <h3>Haftung f&uuml;r Inhalte</h3>{" "}
        <p>
          Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
          f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder
          gespeicherte fremde Informationen zu &uuml;berwachen oder nach
          Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit
          hinweisen.
        </p>{" "}
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon
          unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab
          dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
          m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
          werden wir diese Inhalte umgehend entfernen.
        </p>{" "}
        <h3>Haftung f&uuml;r Links</h3>{" "}
        <p>
          Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
          deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
          f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen.
          F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige
          Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
          Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche
          Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte
          waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>{" "}
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>{" "}
        <h3>Urheberrecht</h3>{" "}
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die
          Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
          bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
          Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den
          privaten, nicht kommerziellen Gebrauch gestattet.
        </p>{" "}
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
      </Panel>
    </div>
  );
};
