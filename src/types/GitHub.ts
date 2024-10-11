export interface GitHubFollowers {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
}

export interface GithubUser {
  name: string | null;
  bio: string | null;
  company: string | null;
  location: string | null;
}

export interface Followers {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
  user: GithubUser;
}

export const ListFollowers: Followers[] = [
  {
    login: "esin",
    id: 69767,
    avatar_url: "https://avatars.githubusercontent.com/u/69767?v=4",
    html_url: "https://github.com/esin",
    user: {
      name: "Andrey Esin",
      bio: "Linux Administrator, DevOps Engineer and Go Developer",
      company: null,
      location: null,
    },
  },
  {
    login: "araguaci",
    id: 7318668,
    avatar_url: "https://avatars.githubusercontent.com/u/7318668?v=4",
    html_url: "https://github.com/araguaci",
    user: {
      name: null,
      bio: "✠Crux_Sacra_Sit_Mihi_Lux✠ \r\n✠Non_Draco_Sit_Mihi_Dux✠ \r\n✠V.R.S.N.S.M.V.S.M.Q.L.I.V.B.✠ \r\n✠Non nobis Domine nobis, sed nom ini tuo ad gloriam.✠",
      company: "Artes do Sul",
      location: "Brasil",
    },
  },
  {
    login: "mustafacagri",
    id: 7488394,
    avatar_url: "https://avatars.githubusercontent.com/u/7488394?v=4",
    html_url: "https://github.com/mustafacagri",
    user: {
      name: "Mustafa Çağrı Güven",
      bio: "👾 Senior Frontend Wizard 🎩 Vue.js 3 ☄ Nuxt.js 3 🌟 Next.js 14 🌠 React.js 18 💻 TypeScript 🦄 Node.js ☃ Express.js 🌸 Pinia 🔥 Typescript 🎨 Tailwind",
      company: null,
      location: "İstanbul / ✈️ 🌎",
    },
  },
  {
    login: "WesleyFerreira97",
    id: 7539166,
    avatar_url: "https://avatars.githubusercontent.com/u/7539166?v=4",
    html_url: "https://github.com/WesleyFerreira97",
    user: {
      name: "Wesley Ferreira",
      bio: "Front End and Mobile developer",
      company: "Stark Industries ",
      location: "Itabuna-Ba ",
    },
  },
  {
    login: "enieber",
    id: 7907068,
    avatar_url: "https://avatars.githubusercontent.com/u/7907068?v=4",
    html_url: "https://github.com/enieber",
    user: {
      name: "Enieber Cunha",
      bio: "Functional Programing (Antifascista e Antirracista)",
      company: "@fast-think",
      location: "Brazil",
    },
  },
  {
    login: "Alvarocda",
    id: 12532704,
    avatar_url: "https://avatars.githubusercontent.com/u/12532704?v=4",
    html_url: "https://github.com/Alvarocda",
    user: {
      name: "Álvaro Claro",
      bio: "Software Developer |\r\nAngular | Quarkus | Flutter",
      company: null,
      location: "Cuiabá, Mato Grosso, Brasil",
    },
  },
  {
    login: "mozafarimanesh",
    id: 16508150,
    avatar_url: "https://avatars.githubusercontent.com/u/16508150?v=4",
    html_url: "https://github.com/mozafarimanesh",
    user: {
      name: "Reza  Mozafari Manesh",
      bio: "NFT Artist /Theater Photographer / Fine Art Photographer / Software Engineer / IT Master's Degree\r\n",
      company: null,
      location: "Republic Of Cyprus",
    },
  },
  {
    login: "IDouble",
    id: 18186995,
    avatar_url: "https://avatars.githubusercontent.com/u/18186995?v=4",
    html_url: "https://github.com/IDouble",
    user: {
      name: "Alp ₿📈🚀🌕",
      bio: "🗽 Be greedy when others are fearful and be fearful when others are greedy ☕️ Full-Stack 🖥💻📱⌚️ Finance, Crypto ⛓ (Blockchain, Smart contracts etc.)",
      company: "IDEX/USD @IDEXio",
      location: "Zurich, Switzerland",
    },
  },
  {
    login: "patrickmartinhuk",
    id: 20271266,
    avatar_url: "https://avatars.githubusercontent.com/u/20271266?v=4",
    html_url: "https://github.com/patrickmartinhuk",
    user: {
      name: null,
      bio: null,
      company: null,
      location: null,
    },
  },
  {
    login: "WillHubner",
    id: 20281938,
    avatar_url: "https://avatars.githubusercontent.com/u/20281938?v=4",
    html_url: "https://github.com/WillHubner",
    user: {
      name: "Willian Hubner",
      bio: "Programador e Apaixonado por Delphi!\r\nEngenheiro de Produção, Especialista e Lider Coach.",
      company: null,
      location: "Brasil, Sinop-MT",
    },
  },
  {
    login: "noogabe",
    id: 25818568,
    avatar_url: "https://avatars.githubusercontent.com/u/25818568?v=4",
    html_url: "https://github.com/noogabe",
    user: {
      name: "Gabriele Almeida",
      bio: "Junior Back-end Developer | Bachelor of Computer Science (IFCE)",
      company: "Sistema Verdes Mares",
      location: "Fortaleza, Ceará",
    },
  },
  {
    login: "pamtap",
    id: 42607442,
    avatar_url: "https://avatars.githubusercontent.com/u/42607442?v=4",
    html_url: "https://github.com/pamtap",
    user: {
      name: "Pablo",
      bio: null,
      company: null,
      location: null,
    },
  },
  {
    login: "jhonatanborg",
    id: 44879981,
    avatar_url: "https://avatars.githubusercontent.com/u/44879981?v=4",
    html_url: "https://github.com/jhonatanborg",
    user: {
      name: "Jhonatan Borges",
      bio: "Front-End Developer | UX/UI Designer 💻\r\n''Knowledge is power''. Software is life!",
      company: "Upstack",
      location: "João Pessoa - PB",
    },
  },
  {
    login: "jhonatanlinux",
    id: 45457692,
    avatar_url: "https://avatars.githubusercontent.com/u/45457692?v=4",
    html_url: "https://github.com/jhonatanlinux",
    user: {
      name: "Jhonatan Alves",
      bio: "Analista de banco de dados PostgreSQL na TopSapp - Gestão de Provedores\r\nBuscando conhecimento em REACT JS, JAVASCRIPT, TYPESCRIPT, TAILWIND CSS , ETC..",
      company: "@GrupoAdBrax",
      location: "Sinop - MT",
    },
  },
  {
    login: "devmauromoura",
    id: 46508633,
    avatar_url: "https://avatars.githubusercontent.com/u/46508633?v=4",
    html_url: "https://github.com/devmauromoura",
    user: {
      name: "Mauro Moura",
      bio: "Senior Mobile Developer | React Native",
      company: null,
      location: "Sinop, MT - BR",
    },
  },
  {
    login: "E-Mello",
    id: 52728995,
    avatar_url: "https://avatars.githubusercontent.com/u/52728995?v=4",
    html_url: "https://github.com/E-Mello",
    user: {
      name: "Édio Melo",
      bio: "Front-End Developer (NextJS) and Mobile Developer (React-Native) 💻 🌐 ",
      company: null,
      location: "Sinop - MT , Brazil",
    },
  },
  {
    login: "nidabaci",
    id: 60344290,
    avatar_url: "https://avatars.githubusercontent.com/u/60344290?v=4",
    html_url: "https://github.com/nidabaci",
    user: {
      name: "Nids",
      bio: "I am a Web Developer enthusiast, pursuing a Master's degree in Data Science and Artificial Intelligence. \r\nA curious person who loves to code and grow everyday.",
      company: "Commit  Software",
      location: "Tirana, Albania",
    },
  },
  {
    login: "joaodias-rms",
    id: 61212858,
    avatar_url: "https://avatars.githubusercontent.com/u/61212858?v=4",
    html_url: "https://github.com/joaodias-rms",
    user: {
      name: "João Victor Dias Ramos",
      bio: "Graduando em sistemas de informação UNEMAT \r\n",
      company: "TradeUp Group",
      location: "Porto Velho - RO",
    },
  },
  {
    login: "thiagomendonca-eu",
    id: 66015748,
    avatar_url: "https://avatars.githubusercontent.com/u/66015748?v=4",
    html_url: "https://github.com/thiagomendonca-eu",
    user: {
      name: "Thiago Mendonça",
      bio: null,
      company: "@Zeine-inc",
      location: "Sinop-MT, Brasil",
    },
  },
  {
    login: "paulopeloi",
    id: 68501028,
    avatar_url: "https://avatars.githubusercontent.com/u/68501028?v=4",
    html_url: "https://github.com/paulopeloi",
    user: {
      name: "Paulo Ricardo Peloi",
      bio: null,
      company: "Experdata - Soluções Inteligentes",
      location: "Brasil, Sorriso-MT",
    },
  },
  {
    login: "devmichaelheming",
    id: 69850584,
    avatar_url: "https://avatars.githubusercontent.com/u/69850584?v=4",
    html_url: "https://github.com/devmichaelheming",
    user: {
      name: "Michael Heming",
      bio: "Front-end Developer",
      company: "e-Auditoria",
      location: "Sinop, MT",
    },
  },
  {
    login: "jhonnytopsapp",
    id: 69931092,
    avatar_url: "https://avatars.githubusercontent.com/u/69931092?v=4",
    html_url: "https://github.com/jhonnytopsapp",
    user: {
      name: "Jhonny Zeira",
      bio: "Software Developer",
      company: "TopSapp",
      location: "Sinop, MT",
    },
  },
  {
    login: "FulvioFPimentel",
    id: 70281214,
    avatar_url: "https://avatars.githubusercontent.com/u/70281214?v=4",
    html_url: "https://github.com/FulvioFPimentel",
    user: {
      name: "Fulvio Pimentel",
      bio: "Java developer | Fullstack standard |\r\nThe development of a good developer never ends..",
      company: "Ericsson",
      location: "São Paulo, Brasil",
    },
  },
  {
    login: "AllanCK",
    id: 70301477,
    avatar_url: "https://avatars.githubusercontent.com/u/70301477?v=4",
    html_url: "https://github.com/AllanCK",
    user: {
      name: "Allan Cristian Krause",
      bio: null,
      company: null,
      location: null,
    },
  },
  {
    login: "OfficialCodeVoyage",
    id: 72575602,
    avatar_url: "https://avatars.githubusercontent.com/u/72575602?v=4",
    html_url: "https://github.com/OfficialCodeVoyage",
    user: {
      name: "Pavlo Bondarenko",
      bio: "Software Engineer / Cloud Engineer / IT Enthusiast ",
      company: null,
      location: "San Francisco",
    },
  },
  {
    login: "baekteun",
    id: 74440939,
    avatar_url: "https://avatars.githubusercontent.com/u/74440939?v=4",
    html_url: "https://github.com/baekteun",
    user: {
      name: "baegteun",
      bio: "으악 ;ㅁ;",
      company: "@pixohq @GSM-MSG @wakmusic",
      location: null,
    },
  },
  {
    login: "hacker8853",
    id: 76920935,
    avatar_url: "https://avatars.githubusercontent.com/u/76920935?v=4",
    html_url: "https://github.com/hacker8853",
    user: {
      name: "Hacker",
      bio: null,
      company: null,
      location: "localhost:3000",
    },
  },
  {
    login: "Charles-Chrismann",
    id: 78157563,
    avatar_url: "https://avatars.githubusercontent.com/u/78157563?v=4",
    html_url: "https://github.com/Charles-Chrismann",
    user: {
      name: "Charles Chrismann",
      bio: "Étudiant en 3e année de Développement Web à l'IIM ",
      company: "Institut de l'Internet et du Multimédia (IIM)",
      location: "Paris, La Défense",
    },
  },
  {
    login: "gendrax01",
    id: 79708185,
    avatar_url: "https://avatars.githubusercontent.com/u/79708185?v=4",
    html_url: "https://github.com/gendrax01",
    user: {
      name: "Thiago Luiz",
      bio: null,
      company: null,
      location: null,
    },
  },
  {
    login: "karielly16",
    id: 79888115,
    avatar_url: "https://avatars.githubusercontent.com/u/79888115?v=4",
    html_url: "https://github.com/karielly16",
    user: {
      name: "Stéffany Selzler",
      bio: "Entrei nesse mundo sem saber pra onde ia, agora continuo não sabendo, mas adorando cada experiência!!!",
      company: null,
      location: "Sinop - MT",
    },
  },
];
