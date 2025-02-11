import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
}

export const Wrapper = ({ id, children }: SectionWrapperProps) => {
  return (
    <section className="h-screen flex flex-col justify-center items-center px-[3rem]" id={id}>
      {children}
    </section>
  );
};
