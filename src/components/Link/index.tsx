import { PropsWithChildren } from "react";

export const Link = ({children, href}: PropsWithChildren<{href: string }>) => (
  <a href={href} className="link">{children}</a>
)