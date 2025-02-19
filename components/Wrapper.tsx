import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
}

export const Wrapper = ({ id, children }: SectionWrapperProps) => {
  return (
    <section className="min-h-screen overflow-y-auto container mx-auto snap-start relative" id={id}>
      {children}
    </section>
  );
};
