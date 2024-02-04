import React, { PropsWithChildren } from "react";
import '../dist/assets/index.css'

export default ({children}: PropsWithChildren) => (
  <div className="frame">{children}</div>
)