type ContentInterest = {
  id: string;
  title: string;
  description: React.ReactNode;
  time: string;
  color: string;
  icon: string;
};

const interests = [
  {
    id: "engineering",
    title: "Engineering",
    description: (
      <p>
        While I was always a tinkerer, even far before I got into programming,
        as one of my best friends moved to my city and started a engineering
        major, we&apos;ve been working on far more ambitious projects before.
        It&apos;s definitely my second passion, and a good balance for my screen
        time haha.
      </p>
    ),
    time: "Late 2024",
    color: "#ff6b00",
    icon: "autodesk-fusion-360",
  },
  {
    id: "3d-printing",
    title: "3D Printing",
    description: (
      <p>
        After a long time waiting, I finally splurged on a 3D printer. I love
        the flexibility of being able to create almost anything in a few hours
        and enjoy using all of the different materials.
      </p>
    ),
    time: "Late 2022",
    color: "#24a543",
    icon: "bambulab",
  },
  {
    id: "iot",
    title: "IoT",
    description: (
      <p>
        I started tinkering with Raspberry Pi&apos;s setting up{" "}
        <b>various little automations</b>, and getting more{" "}
        <b>familiar with the command line</b>.
      </p>
    ),
    time: "Mid 2018",
    color: "#BD0940",
    icon: "raspberry-pi",
  },
  {
    id: "media-creation",
    title: "Media Creation",
    description: (
      <p>
        While I stared cutting videos way before I got into coding, I was
        certainly getting more advanced around this time. Ditching good old{" "}
        <b>Windows Movie Maker</b> and <b>iMovie</b> for{" "}
        <b>Adobe Premiere Pro</b> and steadily taking on more advanced and
        complex projects and visual manipulations.
      </p>
    ),
    time: "Late 2018",
    icon: "adobe-premiere-pro",
    color: "#dd80f8",
  },
  {
    id: "programming",
    title: "Programming",
    description: (
      <p>
        Around this time I got into <b>programming</b>. I started writing{" "}
        <b>simple webpages</b> using <b>HTML, CSS, PHP and JS</b>,{" "}
        <b>Arduino programs</b> with my friend, and interestually picked up{" "}
        <b>Java</b> for my first <b>native Android apps</b>.
      </p>
    ),
    time: "Mid 2017",
    icon: "vscode",
    color: "#40ABF2",
  },
  {
    id: "virtualization",
    title: "Virtualization",
    description: (
      <p>
        Starting early, I&apos;ve begun <b>setting up many virtual machines</b>{" "}
        using <b>various configurations and patches</b> for diverse operating
        systems on plenty of <b>hosts and hypervisors</b>.
      </p>
    ),
    time: "Early 2016",
    color: "#F38B00",
    icon: "esxi",
  },
  {
    id: "hackintoshing",
    title: "Hackintoshing",
    description: (
      <p>
        I&apos;ve been{" "}
        <b>
          <u>
            <a href="https://wikipedia.org/wiki/Hackintosh">Hackintoshing</a>
          </u>
        </b>{" "}
        for a while and was <b>active as an helper</b> in the{" "}
        <a href="https://discord.gg/u8V7N5C">community</a> in <b>2018</b>.<br />
        To this day I still <b>enjoy the technical challenges</b> of every{" "}
        <b>macOS update</b> very much and got a good amount of{" "}
        <b>general architectural and software knowledge</b>.
      </p>
    ),
    time: "Early 2015",
    color: "#FFFFFF",
    icon: "hackintoshing",
  },
] as const satisfies ContentInterest[];
export const contentInterests = interests as Readonly<ContentInterest[]>;
