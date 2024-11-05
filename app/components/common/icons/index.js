import { string } from "prop-types";

import Icons from "./icons";

const Icon = ({ type = "", ...props }) => {
  const RenderIcon = Icons[type];

  return <RenderIcon {...props} />;
};

Icon.propTypes = {
  type: string,
};

export default Icon;
