"use client";

export default function Errorwrapper({ error }: { error: Error }) {
  return <h1>Ooooops!!! {error.message}</h1>;
}
