export type SocialLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function SocialLink({ href, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-all duration-350 hover:text-purple-500/100"
    >
      {children}
    </a>
  );
}
