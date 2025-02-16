type ContentEvent = {
  id: string;
  title: string;
  description: React.ReactNode;
  date: Date;
  color: string;
  icon: string;
};

export const contentEvents = [
  {
    id: "engineering",
    title: "Engineering",
    description: (
      <p>
        While I was always a tinkerer, even far before I got into programming,
        as one of my best friends moved to my city and started a engineering
        major, we've been working on far more ambitious projects before. It's
        definitely my second passion, and a good balance for my screen time
        haha.
      </p>
    ),
    date: new Date("2024-09-01"),
    color: "#ff6b00",
    icon: "autodesk-fusion-360_pixelated.png",
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
    date: new Date("2022-08-17"),
    color: "#24a543",
    icon: "bambulab_pixelated.png",
  },
  {
    id: "hackintoshing",
    title: "Hackintoshing",
    description: (
      <p>
        I've been{" "}
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
    date: new Date("2015-04-12"),
    color: "#FFFFFF",
    icon: "hackintoshing_pixelated.png",
  },
  {
    id: "iot",
    title: "IoT",
    description: (
      <p>
        I started tinkering with Raspberry Pi's setting up{" "}
        <b>various little automations</b>, and getting more{" "}
        <b>familiar with the command line</b>.
      </p>
    ),
    date: new Date("2017-08-15"),
    color: "#BD0940",
    icon: "raspberry-pi_pixelated.png",
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
    date: new Date("2018-07-16"),
    icon: "adobe-premiere-pro_pixelated.png",
    color: "#dd80f8",
  },
  {
    id: "virtualization",
    title: "Virtualization",
    description: (
      <p>
        Starting early, I’ve begun <b>setting up many virtual machines</b> using{" "}
        <b>various configurations and patches</b> for diverse operating systems
        on plenty of <b>hosts and hypervisors</b>.
      </p>
    ),
    date: new Date("2016-02-16"),
    color: "#F38B00",
    icon: "esxi_pixelated.png",
  },
  {
    id: "programming",
    title: "Programming",
    description: (
      <p>
        Around this time I got into <b>programming</b>. I started writing{" "}
        <b>simple webpages</b> using <b>HTML, CSS, PHP and JS</b>,{" "}
        <b>Arduino programs</b> with my friend, and eventually picked up{" "}
        <b>Java</b> for my first <b>native Android apps</b>.
      </p>
    ),
    date: new Date("2017-05-16"),
    icon: "vscode_pixelated.png",
    color: "#40ABF2",
  },
];
