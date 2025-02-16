import React from "react";
import { ContentTechnologyID } from "./technologies";

type ContentProject = {
  id: string;
  layer: number;
  title: string;
  description: React.ReactNode;
  teaster: React.ReactNode;
  links: { title: string; url: string; color: string; icon: string }[];
  features: React.ReactNode[];
  color: string;
  technologies: ContentTechnologyID[];
  start: Date;
  end: Date | null;
};

export const contentProjects = [
  {
    id: "lgh-mobile",
    layer: 1,
    title: "LGH Mobile",
    description: (
      <p>
        <b>LGH Mobile</b> is a{" "}
        <b>
          <a href="https://play.google.com/store/apps/details?id=klingens13.lgh_mobile">
            Android
          </a>{" "}
          and{" "}
          <a href="https://apps.apple.com/de/app/lgh-mobile/id1478548684">
            iOS
          </a>{" "}
          app
        </b>{" "}
        I built for the{" "}
        <b>
          <a href="https://lingemann-gymnasium.de/">local school</a> I'm going
          to
        </b>
        , which provides the <b>1.1k+ users</b> with a{" "}
        <b>personalized Push Notification</b> leading to a more user-friendly
        version of the <b>new daily substitution plan</b>.<br />
        \nBesides that, it serves a <b>cleaner</b>, <b>mobile ready</b>{" "}
        experience of our sometimes very <b>sloppy homepage</b>, a{" "}
        <a href="https://lingemann-gymnasium.de/Breaking-News/">
          Breaking News feed
        </a>{" "}
        and a <b>quick and instantaneous</b> way for administration to reach{" "}
        <b>students and parents</b>.<br />
        \nLong gone are the <b>manual uploads</b> of substitution plan as a{" "}
        <b>PDF</b> behind <b>5 redirects</b> for the user and here is a{" "}
        <b>responsive online editor</b> as part of a <b>full custom</b> teacher
        console.
        <br />
        \nAlongside the app, the <b>homepage</b> also got refreshing{" "}
        <b>new features and designs</b> in the internal area.
        <br />
        \nThe app also featured a{" "}
        <a href="https://www.lingemann-gymnasium.de/fileadmin/Datenablage/BreakingNews/LGH_Elevated.png">
          3D-Explorer of the school
        </a>{" "}
        including <b>different states</b> of the back then{" "}
        <a href="https://www.lingemann-gymnasium.de/fileadmin/Datenablage/BreakingNews/LGH_Elevated/7.png">
          recent renovations
        </a>
        , different{" "}
        <a href="https://www.lingemann-gymnasium.de/fileadmin/Datenablage/BreakingNews/LGH_Elevated/6.png">
          3D floor plans
        </a>{" "}
        and{" "}
        <a href="https://www.lingemann-gymnasium.de/fileadmin/Datenablage/BreakingNews/LGH_Elevated/8.png">
          indoor navigation
        </a>{" "}
        using the many <b>WiFi-APs for positioning</b>, inside{" "}
        <a href="https://www.lingemann-gymnasium.de/fileadmin/Datenablage/BreakingNews/LGH_Elevated/5.png">
          downloadable packages
        </a>
        , which <b>never got out of Beta</b> and unfortunately <b>canceled</b>{" "}
        due to <b>time constraints</b>, <b>but worked for a brief period</b>,{" "}
        <b>winning</b> the regional first place at{" "}
        <a href="https://www.jugend-forscht.de/">Jugend Forscht</a>.
      </p>
    ),
    teaster: (
      <p>
        The <b>smarter homepage extension suite</b> to <b>supplement</b> the
        ancient CMS system that runs <b>the homepage of my school</b>. After{" "}
        <b>maintaining it for years</b>, I sadly had to sunset it to the
        disappointment of all students, but it worked{" "}
        <b>flawlessly until the last day</b>.
      </p>
    ),
    features: [
      <p>
        <b>Personalised Push-Notifications</b> for{" "}
        <b>daily substitution plans</b>
      </p>,
      <p>
        <b>Modernized, more efficient</b> design
      </p>,
      <p>
        <b>Fast and mobile ready</b> access to brief <b>custom news feed</b> and{" "}
        <b>cantine plan</b>
      </p>,
      <p>
        <b>1.6k+ active app installations</b> and{" "}
        <b>around 13k+ unique visitors per month</b> while{" "}
        <b>averaging 1.1k+ students</b>
      </p>,
      <p>
        Many features <b>based on or enhanced by user feedback</b>
      </p>,
    ],
    links: [
      {
        title: "App Store",
        url: "https://apps.apple.com/de/app/lgh-mobile/id1478548684",
        color: "#1889e6",
        icon: "appstore_pixelated.png",
      },
      {
        title: "Play Store",
        url: "https://play.google.com/store/apps/details?id=klingens13.lgh_mobile",
        color: "#34a853",
        icon: "playstore_pixelated.png",
      },
      {
        title: "School Page",
        url: "https://lingemann-gymnasium.de/startseite",
        color: "#8c2f3a",
        icon: "web_pixelated.png",
      },
      {
        title: "News Site",
        url: "https://web.archive.org/web/20240306224150/https://lgh.today/",
        color: "#8c2f3a",
        icon: "web_pixelated.png",
      },
    ],
    color: "#5D50A2",
    technologies: ["react", "unreal-engine"],
    start: new Date("2019-07-02"),
    end: new Date("2024-03-03"),
  },
  {
    id: "classified-ink",
    layer: 2,
    title: "classified.ink",
    description: (
      <p>
        Sadly, this project is currently freezed, since I had to abandon it for
        the time being.
      </p>
    ),
    teaster: (
      <p>A fully private, secure and free note-taking app for everyone.</p>
    ),
    features: [
      <p>
        Full <b>client side encryption and decryption</b>
      </p>,
      <p>
        Fully <b>open source</b> and <b>self-hostable</b>
      </p>,
    ],
    links: [
      {
        title: "Website (very WIP)",
        url: "https://classified.ink",
        color: "#3b0806",
        icon: "web_pixelated.png",
      },
      {
        title: "GitHub",
        url: "https://github.com/klydra/classified.ink",
        color: "#000000",
        icon: "github_pixelated.png",
      },
    ],
    color: "#3b0806",
    technologies: ["react", "typescript", "turso"],
    start: new Date("2024-03-14"),
    end: null,
  },
] as const satisfies ContentProject[];
