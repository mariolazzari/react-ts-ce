import React from "react";
import Great from "../components/Greet";

const CustomComponent = (props: React.ComponentProps<typeof Great>) => {
  return <div>{props.name}</div>;
};

export default CustomComponent;
