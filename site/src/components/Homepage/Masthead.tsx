import { Group, Grid, Card } from "@mantine/core";

import Picture from "../../images/catherine.png";
import CV from "../../files/Catherine Yeh CV.pdf";

import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import MyImage from "../MyImage";

function Masthead() {
  return (
    <div id="masthead">
      <Grid
        grow
        gutter={{ base: 20, xs: 25, sm: 40, md: 45, xl: 50 }}
        align="center"
      >
        <Grid.Col span={{ base: 12, sm: 5, md: 4, lg: 3 }}>
          <Card radius={"lg"} id="prof-pic-contain">
            <Card.Section>
              <MyImage
                src={Picture}
                id="prof-pic"
                title="Catherine Yeh"
                alt="Picture of Catherine Yeh"
              />
            </Card.Section>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 7, md: 8, lg: 9 }}>
          <Group justify="space-between" align="center" id="header-contain">
            <h1>Catherine Yeh</h1>
            <Group gap={"sm"} className="icons" justify="end">
              <a
                target="_blank"
                href="mailto:catherineyeh@g.harvard.edu"
                title="Email"
              >
                <FaEnvelope />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/catherinesyeh/"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                target="_blank"
                href="https://scholar.google.com/citations?user=KROUdngAAAAJ"
                title="Google Scholar"
              >
                <FaGoogleScholar />
              </a>
              <a
                target="_blank"
                href="https://github.com/catherinesyeh/"
                title="Github"
              >
                <FaGithub />
              </a>
            </Group>
          </Group>

          <p className="monospace accent tagline grad2">
            CS Ph.D. Candidate @ Harvard University
          </p>

          <p>
            Hi, I'm Catherine! I'm a third-year computer science Ph.D. student @
            Harvard University, advised by{" "}
            <a
              target="_blank"
              href="https://www.bewitched.com/"
              title="Martin Wattenberg"
            >
              Prof. Martin Wattenberg
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              href="http://www.fernandaviegas.com/"
              title="Fernanda Viégas"
            >
              Prof. Fernanda Viégas
            </a>{" "}
            in the{" "}
            <a
              target="_blank"
              href="https://insight.seas.harvard.edu/"
              title="Insight + Interaction Lab"
            >
              Insight + Interaction Lab
            </a>
            . My research interests lie at the intersection of{" "}
            <b>visualization</b>, <b>interpretability</b>, and{" "}
            <b>human-AI interaction</b>. I'm fortunate to be supported by the{" "}
            <a target="_blank" href="https://www.nsfgrfp.org/" title="NSF GRFP">
              NSF Graduate Research Fellowship
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              href="https://kempnerinstitute.harvard.edu/education/graduate-fellowship/"
              title="Kempner Fellowship"
            >
              Kempner Institute Graduate Fellowship
            </a>
            .
          </p>

          <p>
            Previously, I received my B.A. in computer science + cognitive
            science @ Williams College. As an undergrad, I worked with{" "}
            <a
              target="_blank"
              href="https://www.cs.williams.edu/~iris/"
              title="Iris Howley"
            >
              Prof. Iris Howley
            </a>{" "}
            to design an{" "}
            <a
              target="_blank"
              href="https://unbound.williams.edu/theses/islandora/object/studenttheses%3A1960"
              title="Undergrad Thesis"
            >
              empirical framework for post-hoc explainable AI
            </a>
            . I've also interned at Apple Research, Microsoft Research{" "}
            <span className="monospace smaller">[x2]</span>, and Adobe Research.
            You can find more information in my{" "}
            <a target="_blank" href={CV} title="CV">
              CV
            </a>
            .
          </p>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default Masthead;
