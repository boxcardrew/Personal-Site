import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import Nav from "../components/nav";
import Title from "../components/title";
import Subtitle from "../components/subtitle";
import SectionSeparator from "../components/section-separator";
import WorkingOn from "../components/working-on";
import ProjectSection from "../components/project-section";
import projects from "../data/projects-list";
import { useState } from "react";
import Menu from "../components/menu";

export default function Home({ feed }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Layout>
        <Head>
          <title>Drew Bray</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
          {open ? (
            <div>
              <Nav open={open} setOpen={setOpen} />
              <Menu />

            </div>
          ) : (
            <div>
              <Nav open={open} setOpen={setOpen} />
              <Title />
              <Subtitle />
              <SectionSeparator bgColor="#000" hrHeight=".25em" />
              <WorkingOn />
              <ProjectSection projects={feed} />
            </div>
          )}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const feed = projects;
  return {
    props: {
      feed,
    },
  };
}
