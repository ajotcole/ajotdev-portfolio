import styles from "./expierience.module.scss";

export const Expierience = () => {
  const expierenceData = [
    {
      company: "HanseVision GmbH",
      jobTitle: "Junior Software Developer",
      period: "02.2020 - Today",
      position: 1,
      texts: [
        "Hier habe ich was gemacht.",
        "Und das wird auch noch mal gemacht.",
      ],
    },
    {
      company: "LW Mega Yacht Solutions GmbH",
      jobTitle: "Support Engineer",
      period: "09.2021 - Today",
      position: 2,
      texts: [
        "Hier habe ich was gemacht.",
        "Und das wird auch noch mal gemacht.",
      ],
    },
    {
      company: "neusta Software Development GmbH",
      jobTitle: "Frontend Developer",
      period: "02.2018 - 08.2019",
      position: 3,
      texts: [
        "Hier habe ich was gemacht.",
        "Und das wird auch noch mal gemacht.",
      ],
    },
    {
      company: "neusta Software Development GmbH",
      jobTitle: "Ausbildung Media Designer",
      period: "08.2015 - 01.2018",
      position: 3,
      texts: [
        "Hier habe ich was gemacht.",
        "Und das wird auch noch mal gemacht.",
      ],
    },
  ];

  return (
    <>
      {expierenceData
        .sort((a, b) => a.position - b.position)
        .map((x, i) => (
          <div className={styles.expierienceContainter} key={i}>
            <div>
              <h3>{x.jobTitle}</h3>
              <div>{x.period}</div>
              <div>{x.company}</div>
            </div>
            <div>
              <ul>
                {x.texts.map((x, ix) => (
                  <li key={ix}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </>
  );
};
