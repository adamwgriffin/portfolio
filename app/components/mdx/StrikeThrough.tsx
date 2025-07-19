export type StrikethroughProps = React.DetailedHTMLProps<
  React.DelHTMLAttributes<HTMLModElement>,
  HTMLModElement
>;

export function Strikethrough(props: StrikethroughProps) {
  return <del {...props} />;
}
