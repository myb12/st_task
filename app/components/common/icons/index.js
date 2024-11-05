import { string } from "prop-types";

import Icons from "./icons";

const Icon = ({ type = "", ...props }) => {
  if (!type) return null;

  const RenderIcon = Icons[type];

  return <RenderIcon {...props} />;
};

Icon.propTypes = {
  type: string,
};

export default Icon;
