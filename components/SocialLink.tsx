export type SocialLinkProps = {
  href: string;
  target?: string;
  children: React.ReactNode;
};

export function SocialLink({
  href,
  target = "_blank",
  children
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target={target}
      className="transition-all duration-300 hover:text-zinc-400"
    >
      {children}
    </a>
  );
}
