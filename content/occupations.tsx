type ContentOccupation = {
  id: string;
  title: string;
  timeframe: string;
  relation: string;
  role: string;
  description: React.ReactNode;
};

const occupations = [
  {
    id: "lgh",
    title: "Public High School Johann Georg Lingemann",
    timeframe: "Aug 2019 - May 2020",
    relation: "Student",
    role: "Graduate",
    description: (
      <>
        Involved student with early interests in computer science. First taking
        part in; later leading multiple computer science clubs.
      </>
    ),
  },
  {
    id: "fontys",
    title: "Fontys University of Applied Sciences and Technology",
    timeframe: "Aug 2023 - Now",
    relation: "Student",
    role: "Computer Science Major",
    description: (
      <>
        Involved student, but with major advantages in regards to knowledge,
        because of very early self-thought knowledge and experiences.
      </>
    ),
  },
  null,
  {
    id: "yur",
    title: "YUR® Inc.",
    timeframe: "Apr 2021 - Sep 2021",
    relation: "Voluntary Intern",
    role: "System Level Linux Reverse Engineering and Development",
    description: (
      <>
        Worked with a fixed team and influential outside collaborators like Rémi
        Arnaud to fix YUR's core ML tracking Android service. Primary focus was
        on reverse-engineering the continuously updated Meta Quest Operating
        System Builds and finding memory offsets to read normally unaccessible
        sensor data from.
      </>
    ),
  },
  {
    id: "educa",
    title: "Digital Learning GmbH",
    timeframe: "Feb 2022 - Now",
    relation: "Part-Time Employee",
    role: "Full-Stack Developer",
    description: (
      <>
        Started as a part-time bug-fixer but quickly graduated to multi-project
        owner. Constructing and managing enterprise-scale codebases with some
        minor project coordinator duties.
      </>
    ),
  },
] as const satisfies (ContentOccupation | null)[];
export const contentOccupations = occupations as Readonly<
  (ContentOccupation | null)[]
>;
