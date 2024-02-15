import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const organizationName = "digitalinnovationone";
const projectName = "wiki-education";

const config: Config = {
  title: "DIO para Experts",
  tagline: "make the change",
  favicon: "img/favicon.ico",

  url: "https://docusaurus-2.netlify.app",
  baseUrl: `/`,
  projectName: "wiki-education",
  organizationName: "digitalinnovationone",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

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
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Education",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/digitalinnovationone",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Communidade",
          items: [
            {
              label: "DIO ME",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/school/dio-makethechange/",
            },
            {
              label: "instagram",
              href: "https://www.instagram.com/dio_makethechange/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "innovationone",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DIO make the change`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
