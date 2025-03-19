import Image from "next/image";

export default function Logo(props: { width: number }) {
  const { width } = props;
  const height = width / 2;

  return (
    <Image
      src="https://placehold.co/100x50/png?text=App+Logo"
      width={width}
      height={height}
      alt="Adopt me! logo"
      priority
    />
  );
}
