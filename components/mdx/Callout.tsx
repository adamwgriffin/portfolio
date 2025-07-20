export type CalloutProps = {
  emoji: string;
  children: React.ReactNode;
};

export function Callout({ emoji, children }: CalloutProps) {
  return (
    <div
      className="px-4 py-3 bg-[#F7F7F7] dark:bg-[#181818] rounded p-1 text-sm
        flex items-center text-neutral-900 dark:text-neutral-100 mb-8"
    >
      <div className="flex items-center w-4 mr-4">{emoji}</div>
      <div className="w-full callout leading-relaxed">{children}</div>
    </div>
  );
}
