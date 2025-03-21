import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
}

export const Wrapper = ({ id, children }: SectionWrapperProps) => {
  return (
    <section className="container relative mx-auto min-h-screen snap-start overflow-y-auto" id={id}>
      {children}
    </section>
  );
};
