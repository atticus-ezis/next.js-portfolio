import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
}

export const Wrapper = ({ id, children }: SectionWrapperProps) => {
  return (
    <section className="center h-screen px-[3rem] overflow-hidden" id={id}>
      {children}
    </section>
  );
};
