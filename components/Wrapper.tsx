import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
}

export const Wrapper = ({ id, children }: SectionWrapperProps) => {
  return (
    <section className="center min-h-screen px-[3rem] snap-start" id={id}>
      {children}
    </section>
  );
};
