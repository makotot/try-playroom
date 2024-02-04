/* eslint-disable react-refresh/only-export-components */
import { PropsWithChildren } from "react";

const Wrapper = ({children}: PropsWithChildren) => (
  <div className="card">
    <div className="card-body">
      {children}
    </div>
  </div>
)

const Title = ({children}: PropsWithChildren) => (
  <h2 className="card-title">
    {children}
  </h2>
)

const Actions = ({children}: PropsWithChildren) => (
  <div className="card-actions justify-end">
    {children}
  </div>
)

export const Card = {
  Wrapper,
  Title,
  Actions
}