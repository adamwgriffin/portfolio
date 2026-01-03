"use client";

/** A client component to get the year dynamically */
export function Year() {
  return <time dateTime="YYYY">{new Date().getFullYear()}</time>;
}
