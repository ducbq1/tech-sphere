import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./showcase.module.css";

const showcaseList = [
  {
    name: "My Awesome Project",
    logo: "/img/logo.png",
    url: "https://myproject.example.com",
    description: "A modern project using Docusaurus beautifully.",
    tags: ["opensource", "react"],
  },
  {
    name: "Another Cool Site",
    logo: "/img/another-logo.png",
    url: "https://another.example.com",
    description: "Another great use of Docusaurus.",
    tags: ["documentation"],
  },
];

function ShowcaseCard({ site }) {
  return (
    <a
      href={site.url}
      className={clsx("card", styles.showcaseCard)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card__image">
        <img src={site.logo} alt={site.name} />
      </div>
      <div className="card__body">
        <h3>{site.name}</h3>
        <p>{site.description}</p>
        <div className={styles.tags}>
          {site.tags.map((tag, idx) => (
            <span key={idx} className="badge badge--secondary margin--xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Showcase() {
  return (
    <Layout title="Showcase" description="Các website sử dụng Docusaurus">
      <main className="container padding-vert--lg">
        <h1 className="text--center">🌟 Docusaurus Showcase 🌟</h1>
        <div className="row">
          {showcaseList.map((site, idx) => (
            <div className="col col--4 margin-vert--lg" key={idx}>
              <ShowcaseCard site={site} />
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
