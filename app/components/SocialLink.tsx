export type SocialLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function SocialLink({ href, children }: SocialLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
