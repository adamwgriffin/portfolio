export type SocialLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function SocialLink({ href, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="transition-all duration-300 hover:text-zinc-400"
    >
      {children}
    </a>
  );
}
