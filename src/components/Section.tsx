import SectionDivider from "./SectionDivider";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <>
      <SectionDivider />
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-white mb-10 text-center tracking-tight">
          {title}
        </h2>
        {children}
      </div>
    </>
  );
}
