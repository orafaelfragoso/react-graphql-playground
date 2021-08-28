import React from 'react'

export type Props = {
  content: React.ReactElement
}

export const Home: React.FC<Props> = ({ content }: Props) => (
  <div>{content}</div>
)
