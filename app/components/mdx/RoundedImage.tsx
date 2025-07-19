import Image, { type ImageProps } from "next/image";

export function RoundedImage(props: ImageProps) {
  return <Image className="rounded-lg" {...props} alt={props.alt ?? ""} />;
}
