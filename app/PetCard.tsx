import classNames from "classnames";
import { LiHTMLAttributes, RefObject } from "react";
import Image from "next/image";

export default function PetCard(
  props: LiHTMLAttributes<HTMLLIElement> & {
    width: number;
    ref?: RefObject<HTMLLIElement | null>;
  },
) {
  const { width, className, ref } = props;
  const height = width + 50;

  return (
    <li
      className={classNames("flex flex-col items-center shadow-lg", className)}
      style={{ width }}
      ref={ref}
    >
      <Image
        src={`https://placehold.co/${width}x${height}/png?text=Pet+Image`}
        alt="Pet"
        width={width}
        height={height}
        className="w-full"
      />
      <div className="p-3">
        <h2 className="text-xl mb-3">Pet Name</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          blanditiis dolores vitae beatae cupiditate alias sed corrupti nisi
          quis excepturi?
        </p>
      </div>
    </li>
  );
}
