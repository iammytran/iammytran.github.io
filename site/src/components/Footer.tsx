import { Group } from "@mantine/core";

function Footer() {
  return (
    <div id="footer">
      <Group justify="space-between" className="footer-group">
        <p>
          Made with 🌸 by Catherine Yeh{" "}
          <span className="lighter">(Updated September 2024)</span>
        </p>

        <a onClick={() => window.scrollTo(0, 0)} title="Back to top">
          Back to top
        </a>
      </Group>
      <span className="accent monospace smaller grad1">
        catherineyeh [at] g [dot] harvard [dot] edu
      </span>
    </div>
  );
}

export default Footer;
