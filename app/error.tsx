"use client";

export type ErrorProps = { error: Error; reset: () => void };

export default function Error({ error }: ErrorProps) {
  console.error(error);

  return (
    <div>
      <p>Oops! Something went wrong... maybe try refreshing?</p>
    </div>
  );
}
