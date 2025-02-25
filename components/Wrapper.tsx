import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
}

export const Wrapper = ({ id, children }: SectionWrapperProps) => {
  return (
    <section className="pt-[4%]" id={id}>
      {children}
    </section>
  );
};
