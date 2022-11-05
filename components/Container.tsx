import type { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <div className="container mx-auto px-7">{children}</div>;
};

export default Container;
