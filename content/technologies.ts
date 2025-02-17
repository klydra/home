type ContentTechnology = {
  id: string;
  title: string;
  link: string;
  color?: string;
  icon?: string;
};

const technologies = [
  {
    id: "turso",
    title: "Turso",
    color: "#4ff8d2",
    link: "https://turso.tech",
  },
  {
    id: "oauth2",
    title: "OAuth 2",
    color: "#808080",
    link: "https://oauth.net/2/",
  },
  {
    id: "unreal-engine",
    title: "Unreal Engine",
    color: "#808080",
    link: "https://www.unrealengine.com",
  },
  {
    id: "unity",
    title: "Unity",
    color: "#808080",
    link: "https://www.unity.com",
  },
  {
    id: "ansible",
    title: "Ansible",
    color: "#808080",
    link: "https://ansible.com",
  },
  {
    id: "websocket",
    title: "WebSockets",
    color: "#808080",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
  },
  {
    id: "java",
    title: "Java",
    color: "#F58219",
    link: "https://www.java.com",
  },
  {
    id: "greenfoot",
    title: "Greenfoot",
    color: "#598333",
    link: "https://greenfoot.org/",
  },
  {
    id: "flutter",
    title: "Flutter",
    color: "#0468d7",
    link: "https://flutter.dev",
  },
  {
    id: "mysql",
    title: "MySQL",
    color: "#F29111",
    link: "https://www.mysql.com/",
  },
  {
    id: "mapbox",
    title: "MapBox",
    color: "#4264FA",
    link: "https://www.mapbox.com/",
  },
  {
    id: "css",
    title: "CSS",
    color: "#1B73BA",
    link: "https://wiki.selfhtml.org/wiki/CSS/",
  },
  {
    id: "html",
    title: "HTML",
    color: "#E14A24",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: "google-cloud",
    title: "Google Cloud",
    link: "https://cloud.google.com/",
    color: "#4285F4",
  },
  {
    icon: "google-cloud",
    id: "google-cloud-pubsub",
    title: "Google Cloud Pub Sub",
    color: "#4285F4",
    link: "https://cloud.google.com/pubsub",
  },
  {
    icon: "google-cloud",
    id: "google-cloud-compute-engine",
    title: "Google Cloud Compute Engine",
    color: "#4285F4",
    link: "https://cloud.google.com/compute",
  },
  {
    id: "firebase",
    title: "Firebase",
    color: "#F47F0A",
    link: "https://firebase.google.com",
  },
  {
    icon: "firebase",
    id: "firebase-in-app-messaging",
    title: "Firebase In-App Messaging",
    color: "#F47F0A",
    link: "https://firebase.google.com/products/in-app-messaging",
  },
  {
    icon: "firebase",
    id: "firebase-performance",
    title: "Firebase Performance",
    color: "#F47F0A",
    link: "https://firebase.google.com/products/performance",
  },
  {
    icon: "firebase",
    id: "firebase-storage",
    title: "Firebase Storage",
    color: "#F47F0A",
    link: "https://firebase.google.com/products/storage",
  },
  {
    icon: "firebase",
    id: "firebase-functions",
    title: "Firebase Functions",
    color: "#F47F0A",
    link: "https://firebase.google.com/products/functions",
  },
  {
    icon: "firebase",
    id: "firebase-authentication",
    title: "Firebase Authentication",
    color: "#F47F0A",
    link: "https://firebase.google.com/products/authentication",
  },
  {
    icon: "firebase",
    id: "firebase-crashlytics",
    title: "Firebase Crashlytics",
    color: "#F47F0A",
    link: "https://firebase.google.com/products/crashlytics",
  },
  {
    icon: "firebase",
    id: "firebase-firestore",
    title: "Firebase Firestore",
    color: "#F47F0A",
    link: "https://firebase.google.com/products/firestore",
  },
  {
    icon: "firebase",
    id: "firebase-cloud-messaging",
    title: "Firebase Cloud Messaging",
    color: "#F47F0A",
    link: "https://firebase.google.com/products/cloud-messaging",
  },
  {
    icon: "firebase",
    id: "firebase-app-check",
    title: "Firebase App-Check",
    color: "#F47F0A",
    link: "https://firebase.google.com/products/app-check",
  },
  {
    icon: "cloudflare",
    id: "cloudflare-pages",
    title: "Cloudflare Pages",
    color: "#EF780C",
    link: "https://pages.dev",
  },
  {
    icon: "cloudflare",
    id: "cloudflare-workers",
    title: "Cloudflare Workers",
    color: "#EF780C",
    link: "https://workers.dev",
  },
  {
    id: "esxi",
    title: "ESXi",
    color: "#F38B00",
    link: "https://www.vmware.com/products/esxi-and-esx.html",
  },
  {
    id: "cplusplus",
    title: "C++",
    color: "#004481",
    link: "https://cplusplus.com",
  },
  {
    id: "nx",
    title: "Nx",
    color: "#012F56",
    link: "https://nx.dev",
  },
  {
    id: "docker",
    title: "Docker",
    color: "#2496ED",
    link: "https://www.docker.com",
  },
  {
    id: "react",
    title: "React",
    color: "#60DAFA",
    link: "https://reactjs.org/",
  },
  {
    id: "rust",
    title: "Rust",
    color: "#EB4700",
    link: "https://www.rust-lang.org/",
  },
  {
    id: "go",
    title: "Go",
    color: "#00ACD9",
    link: "https://golang.org/",
  },
  {
    id: "nodejs",
    title: "node.js",
    color: "#3C873A",
    link: "https://nodejs.org/",
  },
  {
    id: "typescript",
    title: "TypeScript",
    color: "#3179C7",
    link: "https://www.typescriptlang.org/",
  },
  {
    id: "javascript",
    title: "JavaScript",
    color: "#F7E01D",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: "cockroachdb",
    title: "CockroachDB",
    color: "#348641",
    link: "https://www.cockroachlabs.com",
  },
  {
    id: "scylla",
    title: "Scylla",
    color: "#57D1E5",
    link: "https://www.scylladb.com",
  },
  {
    id: "istio",
    title: "Istio",
    color: "#466BB0",
    link: "https://istio.io",
  },
  {
    id: "protobuf",
    title: "Protocol Buffer",
    color: "#F2F3F5",
    link: "https://developers.google.com/protocol-buffers",
  },
  {
    icon: "protobuf",
    id: "grpc",
    title: "gRPC",
    color: "#F2F3F5",
    link: "https://developers.google.com/protocol-buffers",
  },
  {
    id: "kubernetes",
    title: "Kubernetes",
    color: "#336CE6",
    link: "https://kubernetes.io",
  },
  {
    id: "dart",
    title: "Dart",
    color: "#03589c",
    link: "https://dart.dev/",
  },
  {
    id: "nextjs",
    title: "Next.js",
    link: "https://nextjs.org/",
  },
] as const satisfies ContentTechnology[];
export const contentTechnologies = technologies as Readonly<
  ContentTechnology[]
>;

export type ContentTechnologyID = (typeof technologies)[number]["id"];
