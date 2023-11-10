import * as React from "react";

export const Button = (props: React.PropsWithChildren) => {
  return <button>{props.children}</button>;
};
