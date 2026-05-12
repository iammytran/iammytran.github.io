import { Badge } from "@mantine/core";
import { Update as UpdateType } from "./updates";
import { FaAward, FaFileAlt } from "react-icons/fa";
import { RiFlag2Fill } from "react-icons/ri";

function Update(props: UpdateType) {
  let newText = props.text;
  props.links?.forEach((link) => {
    newText = newText.replace(
      link.text,
      `<a href="${link.url}" target="_blank" title="${link.text}">${link.text}</a>`
    );
  });

  return (
    <div className="update">
      <b className="date">
        {props.month} {props.year}
      </b>
      <div>
        <p dangerouslySetInnerHTML={{ __html: newText }}></p>
        {props.tags.map((tag, index) => (
          <Badge
            className="update-tag"
            key={index}
            color={
              tag === "award"
                ? "orange"
                : tag === "milestone"
                ? "pink"
                : "purple"
            }
            variant="light"
            size="xs"
            leftSection={
              tag === "award" ? (
                <FaAward />
              ) : tag === "milestone" ? (
                <RiFlag2Fill />
              ) : (
                <FaFileAlt />
              )
            }
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default Update;
