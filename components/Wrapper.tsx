import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string; // Added optional className prop
}

export const Wrapper: React.FC<SectionWrapperProps> = ({ id, children, className = '' }) => {
  return (
    <section className={`flex flex-col justify-center items-center px-[3rem] ${className}`} id={id}>
      {children}
    </section>
  );
};
