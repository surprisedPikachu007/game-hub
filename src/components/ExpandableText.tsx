import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <div>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="blue"
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Show more"}
      </Button>
    </div>
  );
};

export default ExpandableText;
