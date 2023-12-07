import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, container }) => {
  const [mountNode, setMountNode] = useState(null);

  useEffect(() => {
    setMountNode(container || document.body);
  }, [container]);

  return mountNode ? createPortal(children, mountNode) : mountNode;
};

export default Portal;
