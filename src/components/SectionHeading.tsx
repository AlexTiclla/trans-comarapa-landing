import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'center' | 'left';
  tone?: 'light' | 'dark';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow, title, description, align = 'center', tone = 'light',
}) => {
  const dark = tone === 'dark';
  return (
    <div className={`max-w-2xl mb-6 sm:mb-8 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] mb-2 ${dark ? 'text-comarapa-light' : 'text-comarapa-medium'}`}>
        {eyebrow}
      </p>
      <h2 className={`font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight text-balance ${dark ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-base sm:text-lg leading-relaxed ${dark ? 'text-white/70' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
