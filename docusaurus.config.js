// // @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Crafted by hand — Powered by data.",
  tagline:
    "Analytis, Data Science, and Machine Learning",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://doksbuilder.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Doksbuilder", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // gtag: {
        //   trackingID: "G-KGVK27VGQ7",
        //   anonymizeIP: true,
        // },
        // sitemap: {
        //   changefreq: "weekly",
        //   priority: 0.5,
        //   filename: "sitemap.xml",
        // },
        docs: {
          routeBasePath: '/',
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/adematics",
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/FedericoTartarini/FedericoTartarini.github.io/tree/master/",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: "img/website-card.png",
      navbar: {
        title: "",
        logo: {
          alt: "Crafted by hand — Powered by data.",
          src: "img/index-Light.svg",
          srcDark: "img/index-Dark.svg",
        },
        // Enable last updated feature

        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/Adematics",
            position: "right",
            className: "header--github-link",
            "aria-label": "GitHub repository",
          },
          // {
          //   className: "navbar__youtube navbar__icon",
          //   "aria-label": "YouTube channel",
          //   position: "right",
          //   href: "https://www.youtube.com/c/FedericoTartarini",
          // },
        ],
      },
      showLastUpdateTime: true, // Optional: show the last updated time
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: "About Me",
        //     items: [
        //       {
        //         label: "My Work",
        //         to: "docs/about_me/intro",
        //       },
        //     ],
        //   },
        //   {
        //     title: "Community",
        //     items: [
        //       {
        //         label: "LinkedIn",
        //         href: "https://www.linkedin.com/in/federico-tartarini/",
        //       },
        //       {
        //         label: "YouTube",
        //         href: "https://www.youtube.com/c/FedericoTartarini",
        //       },
        //       {
        //         label: "Twitter",
        //         href: "https://twitter.com/FedericoTartar1",
        //       },
        //     ],
        //   },
        //   {
        //     title: "More",
        //     items: [
        //       {
        //         label: "Blog",
        //         to: "/blog",
        //       },
        //       {
        //         label: "GitHub",
        //         href: "https://github.com/FedericoTartarini",
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Index. Crafted by hand — Powered by data.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        // additionalLanguages: ["latex"],
      },
    }),
  // stylesheets: ["https://fonts.googleapis.com/icon?family=Material+Icons"],
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],
};

export default config;