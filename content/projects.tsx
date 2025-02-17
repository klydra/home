/* eslint-disable react/jsx-key */

import React from "react";
import { ContentTechnologyID } from "./technologies";

type ContentProject = {
  id: string;
  layer: number;
  title: string;
  description: React.ReactNode;
  teaser: React.ReactNode | null;
  links: { title: string; url: string; color: string; icon: string }[] | null;
  features: React.ReactNode[] | null;
  color: string;
  technologies: ContentTechnologyID[] | null;
  start: Date;
  end: Date | null;
};

const projects = [
  {
    id: "lgh-mobile",
    layer: 1,
    title: "LGH Mobile",
    description: (
      <>
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
            <a href="https://lingemann-gymnasium.de/">local school</a> I&apos;m
            going to
          </b>
          , which provides the <b>1.1k+ users</b> with a{" "}
          <b>personalized Push Notification</b> leading to a more user-friendly
          version of the <b>new daily substitution plan</b>.
        </p>
        <p>
          Besides that, it serves a <b>cleaner</b>, <b>mobile ready</b>{" "}
          experience of our sometimes very <b>sloppy homepage</b>, a{" "}
          <a href="https://lingemann-gymnasium.de/Breaking-News/">
            Breaking News feed
          </a>{" "}
          and a <b>quick and instantaneous</b> way for administration to reach{" "}
          <b>students and parents</b>.
        </p>
        <p>
          Long gone are the <b>manual uploads</b> of substitution plan as a{" "}
          <b>PDF</b> behind <b>5 redirects</b> for the user and here is a{" "}
          <b>responsive online editor</b> as part of a <b>full custom</b>{" "}
          teacher console.
        </p>
        <p>
          Alongside the app, the <b>homepage</b> also got refreshing{" "}
          <b>new features and designs</b> in the internal area.
        </p>
        <p>
          The app also featured a{" "}
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
      </>
    ),
    teaser: (
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
    color: "#8c2f3a",
    technologies: [
      "flutter",
      "unity",
      "java",
      "dart",
      "typescript",
      "javascript",
      "nodejs",
      "react",
      "nextjs",
      "cloudflare-pages",
      "cloudflare-workers",
      "google-cloud",
      "google-cloud-pubsub",
      "google-cloud-compute-engine",
      "firebase",
      "firebase-in-app-messaging",
      "firebase-performance",
      "firebase-storage",
      "firebase-functions",
      "firebase-authentication",
      "firebase-crashlytics",
      "firebase-firestore",
      "firebase-cloud-messaging",
      "firebase-app-check",
    ],
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
    teaser: (
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
        color: "#FFFFFF",
        icon: "github_pixelated.png",
      },
    ],
    color: "#3b0806",
    technologies: ["react", "typescript", "turso"],
    start: new Date("2024-03-14"),
    end: null,
  },
  {
    id: "ummo",
    layer: 0,
    title: "ummo",
    description: (
      <p>
        United Massively Multiplayer Online is a <b>game / social platform</b>{" "}
        I&apos;ve been working on by myself as of now.
        <br />
        <br />
        The whole experience is based around the main lobby in the shape of the
        earth using real mapping data, which can handle millions of people in a
        giant place, to meet new friends, chat, hang out, take part in events or
        just have fun.
        <br />
        <br />
        Custom smaller rooms and bigger lounges can be created by players to
        meet privately, yet still right on the face of the earth.
        <br />
        <br />
        It will also possible to create separate moons, which serve as a fully
        customizable and moddable environment hosted by communities that can be
        accessed through the main client.
      </p>
    ),
    teaser: (
      <p>
        A <b>hugely extensible MMO platform</b> to <b>unite</b> all players in{" "}
        <b>a single, global lobby</b> based on the <b>real world</b>.
      </p>
    ),
    features: [
      <p>
        <b>Highly scalable</b> and <b>extendable</b>
      </p>,
      <p>
        <b>Distributed</b> in <b>global clusters</b> with{" "}
        <b>automatic load balancing</b>
      </p>,
      <p>
        <b>Lightweight, DRM-free</b> client
      </p>,
      <p>
        <b>Server-side anti-cheat / anti-tamper</b> protection
      </p>,
      <p>
        <b>Custom environment</b> using{" "}
        <u>
          <b>
            <a href="https://lpdaac.usgs.gov/products/astgtmv003/">ASTGTM V3</a>
          </b>
        </u>
        ,{" "}
        <u>
          <b>
            <a href="https://www.pgc.umn.edu/data/rema/">REMA</a>
          </b>
        </u>
        ,{" "}
        <u>
          <b>
            <a href="https://www.pgc.umn.edu/data/arcticdem/">ArcticDEM</a>
          </b>
        </u>
        ,{" "}
        <u>
          <b>
            <a href="https://openstreetmap.org/">OSM</a>
          </b>
        </u>{" "}
        and <b>procedural generation</b>
      </p>,
    ],
    links: [
      {
        title: "Website (TBD)",
        url: "https://ummo.world/",
        color: "#5E50A2",
        icon: "web_pixelated.png",
      },
    ],
    color: "#5D50A2",
    technologies: [
      "kubernetes",
      "istio",
      "docker",
      "ansible",
      "cockroachdb",
      "scylla",
      "rust",
      "go",
      "cplusplus",
      "unreal-engine",
      "protobuf",
      "grpc",
      "websocket",
      "oauth2",
      "nodejs",
      "typescript",
      "nx",
      "nextjs",
      "cloudflare-workers",
      "cloudflare-pages",
    ],
    start: new Date("2019-04-25"),
    end: null,
  },
  {
    id: "wifi-hunter",
    layer: 2,
    title: "WiFi Hunter",
    description: (
      <p>
        A <a href="https://flutter.dev/">Flutter package</a> which allows{" "}
        <b>capturing the details of Wi-Fi APs</b> on <b>Android</b>.
      </p>
    ),
    teaser: (
      <p>
        I built this package to use it for the <b>indoor tracking</b> in{" "}
        <u>
          <b>
            <a href="/project/lgh-mobile">LGH Mobile</a>
          </b>
        </u>
        , but since the feature got <b>discontinued</b>, I&apos;m not using it
        in any projects currently.
      </p>
    ),
    features: null,
    links: [
      {
        title: "GitHub",
        url: "https://github.com/klydra/wifi_hunter",
        color: "#FFFFFF",
        icon: "github_pixelated.png",
      },
    ],
    color: "#01579b",
    technologies: ["flutter", "dart", "java"],
    start: new Date("2019-12-24"),
    end: new Date("2021-10-02"),
  },
  {
    id: "schulcloud-jetzt",
    layer: 2,
    title: "schulcloud.jetzt",
    description: (
      <p>
        <b>This app</b> and the now deprecated corresponding addon{" "}
        <b>allows users</b> to <b>log in to their school dashboard</b>, that
        they needed to check <b>daily multiple times</b>, <b>just once</b>,
        instead of <b>logging in via 4 redirects every time</b>. The{" "}
        <b>addon</b> is now <b>no longer needed</b>, due to{" "}
        <b>another workaround</b> I found, which improves the user experience.
      </p>
    ),
    teaser: (
      <p>
        A <b>PWA</b> which allows users to{" "}
        <b>log in to their school dashboard much quicker</b>.
      </p>
    ),
    features: null,
    links: [
      {
        title: "Website",
        url: "https://schulcloud.jetzt",
        color: "#FFFFFF",
        icon: "web_pixelated.png",
      },
    ],
    color: "#234F41",
    technologies: [
      "nodejs",
      "nextjs",
      "typescript",
      "react",
      "cloudflare-pages",
      "cloudflare-workers",
    ],
    start: new Date("2021-04-11"),
    end: new Date("2022-08-07"),
  },
  {
    id: "technology-ag",
    layer: 3,
    title: '"Technology" club',
    description: (
      <p>
        <b>A working group my friend and I host</b> at my school with{" "}
        <b>a 7-member</b> group of <b>6th graders</b>.
      </p>
    ),
    teaser: null,
    features: null,
    technologies: null,
    links: null,
    start: new Date("2021-09-05"),
    end: new Date("2023-02-10"),
    color: "#3A322E",
  },
  {
    id: "informatics-ag",
    layer: 3,
    title: '"Informatics" club',
    description: (
      <>
        <p>
          A course of <b>8 students</b> I hosted, because there was{" "}
          <b>no computer science teacher available</b> during this period.
        </p>
        <p>
          Together, we worked on <b>a bunch of different projects</b> to
          introduce the others to <b>computer related</b> topics.
        </p>
        <p>
          This project was the final of many projects, we sadly{" "}
          <b>weren&apos;t quite able to finish</b> due to{" "}
          <b>unexpected cancellations</b> of sessions.
        </p>
      </>
    ),
    teaser: (
      <p>
        <b>A working group I hosted</b> at my school with <b>a 8-member</b>{" "}
        group of <b>10th graders</b>.
      </p>
    ),
    features: null,
    links: [
      {
        title: "GitHub",
        url: "https://github.com/lgh-ag",
        color: "#FFFFFF",
        icon: "github_pixelated.png",
      },
    ],
    color: "#3A322E",
    technologies: ["html", "css", "javascript"],
    start: new Date("2020-09-01"),
    end: new Date("2021-07-24"),
  },
  {
    id: "beatpeeker",
    layer: 3,
    title: "BeatPeeker",
    description: (
      <p>
        A <b>JavaFX Application</b> I built as part of an assignment at my
        university. It allows users to <b>view and analyze</b> their{" "}
        <a href="https://beatsaber.com/">BeatSaber</a> statistics recorded via
        the plugin{" "}
        <a href="https://github.com/Mystogan98/BeatSaviorData">
          BeatSaviourData
        </a>
        .
      </p>
    ),
    teaser: null,
    features: [
      <p>
        Display <b> score</b> and <b>accuracy</b> over time
      </p>,
      <p>
        Browse played sessions, and their songs with their respective{" "}
        <b>difficulty</b>, <b>BPM</b>, <b>speed</b>, <b>adjusted time</b>, and
        more!
      </p>,
      <p>
        See <b>cumulative statistics</b> for entire sessions
      </p>,
    ],
    technologies: ["java"],
    links: [
      {
        title: "GitHub",
        url: "https://github.com/klydra/beatpeeker",
        color: "#FFFFFF",
        icon: "github_pixelated.png",
      },
    ],
    color: "#9b0d10",
    start: new Date("2023-09-29"),
    end: new Date("2024-02-03"),
  },
  {
    id: "108-cards",
    layer: 2,
    title: "108.cards",
    description: (
      <p>
        An open-source simple variation of the basic UNO game gone pastel. Done
        as a school assignment.
      </p>
    ),
    teaser: null,
    features: [
      <p>Pastel color scheme</p>,
      <p>Playable for free (no ADs or trackers)</p>,
      <p>Open-Source and self-hostable</p>,
      <p>Extra rules and mechanics</p>,
      <p>Unlimited player count</p>,
    ],
    links: [
      {
        title: "Website",
        url: "https://108.cards",
        color: "#FFA071",
        icon: "web_pixelated.png",
      },
      {
        title: "GitHub",
        url: "https://github.com/klydra/108",
        color: "#FFFFFF",
        icon: "github_pixelated.png",
      },
    ],
    color: "#FFA071",
    technologies: [
      "react",
      "typescript",
      "css",
      "html",
      "go",
      "cloudflare-pages",
    ],
    start: new Date("2022-10-18"),
    end: new Date("2023-03-15"),
  },
  {
    id: "flappy-david",
    layer: 2,
    title: "FlappyDavid",
    description: (
      <p>
        A sloppy <b>Flappy Bird clone</b> I built with a friend for the{" "}
        <b>computer science class</b> as a mandatory <b>school project</b>.
      </p>
    ),
    teaser: null,
    features: [
      <p>
        <b>Optimized direct WebSocket</b> communication
      </p>,
      <p>
        <b>Custom pixel art avatars</b> based on <b>members of our course</b>
      </p>,
    ],
    links: [
      {
        title: "GitHub",
        url: "https://github.com/klydra/FlappyDavid",
        color: "#FFFFFF",
        icon: "github_pixelated.png",
      },
    ],
    color: "#6EA440",
    technologies: ["greenfoot", "java", "nodejs", "javascript"],
    start: new Date("2022-02-10"),
    end: new Date("2022-07-04"),
  },
  {
    id: "app-ins-eichsfeld",
    layer: 0,
    title: "App in's Eichsfeld",
    description: (
      <p>
        A <b>local tour guide</b> built <b>by students</b> in their holidays
        hosted <b>by the local folk high school</b>. I was{" "}
        <b>the only developer</b> for the <b>website</b> and{" "}
        <b>native Android app</b> which got me{" "}
        <b>my first programming experience</b>.
      </p>
    ),
    teaser: (
      <p>
        A <b>local tour guide</b> built <b>by students</b> in their holidays
        hosted <b>by the local folk high school</b>.
      </p>
    ),
    features: [
      <p>
        <b>First basic project</b>
      </p>,
      <p>
        Destinations documented with{" "}
        <b>text, images, videos and voice recordings</b>
      </p>,
    ],
    links: [
      {
        title: "Website",
        url: "https://appinseichsfeld.de",
        color: "#234F41",
        icon: "web_pixelated.png",
      },
    ],
    color: "#234F41",
    technologies: ["html", "css", "javascript", "java", "mysql", "mapbox"],
    start: new Date("2017-07-10"),
    end: new Date("2018-09-22"),
  },
] as const satisfies ContentProject[];
export const contentProjects = projects as Readonly<ContentProject[]>;
