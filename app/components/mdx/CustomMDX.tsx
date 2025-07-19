import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import React from "react";
import { CaptionComponent } from "../caption";
import { TweetComponent } from "../tweet";
import { YouTubeComponent } from "../youtube";
import { CustomLink } from "./CustomLink";
import { HighlightedCode } from "./HighlightedCode";
import { RoundedImage } from "./RoundedImage";
import { Table } from "./Table";
import { Callout } from "./Callout";
import { Strikethrough } from "./StrikeThrough";

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: string | null | undefined }) => {
    const slug = slugify(children ?? "");
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor"
        })
      ],
      children
    );
  };
  Heading.displayName = `Heading${level}`;
  return Heading;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  StaticTweet: TweetComponent,
  Caption: CaptionComponent,
  YouTube: YouTubeComponent,
  code: HighlightedCode,
  Table,
  del: Strikethrough,
  Callout
};

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
