import { PropsWithChildren } from "react";

export const Button = ({children}: PropsWithChildren) => (
  <button className="btn">{children}</button>
)