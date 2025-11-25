import { ReactNode } from "react";

interface SectionContainerProps {
  id?: string;
  children: ReactNode;
}

export default function SectionContainer({ id, children }: SectionContainerProps) {
  return (
    <section id={id} className="w-full px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}