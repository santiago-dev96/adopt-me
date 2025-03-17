"use client";

import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";

export default function Carousel() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
      <ol className="overflow-hidden relative h-[395px] w-full">
        <li
          className="w-full absolute top-0"
          style={{
            left: (-activeItem * 100) + "%",
          }}
        >
          <figure className="flex flex-col items-center">
            <Image
              src="https://placehold.co/400x400/png?text=Pet+Image"
              width={400}
              height={400}
              alt="Pet"
            />
            <figcaption className="text-xl mt-2">Pet Name 1</figcaption>
          </figure>
        </li>
        <li
          className="w-full absolute top-0"
          style={{
            left: ((1 - activeItem) * 100) + "%",
          }}
        >
          <figure className="flex flex-col items-center">
            <Image
              src="https://placehold.co/400x400/png?text=Pet+Image"
              width={400}
              height={400}
              alt="Pet"
            />
            <figcaption className="text-xl mt-2">Pet Name 2</figcaption>
          </figure>
        </li>
        <li
          className="w-full absolute top-0"
          style={{
            left: ((2 - activeItem) * 100) + "%",
          }}
        >
          <figure className="flex flex-col items-center">
            <Image
              src="https://placehold.co/400x400/png?text=Pet+Image"
              width={400}
              height={400}
              alt="Pet"
            />
            <figcaption className="text-xl mt-2">Pet Name 3</figcaption>
          </figure>
        </li>
      </ol>
      <div className="flex gap-2">
        <button
          className={classNames("w-4 h-4 rounded-full cursor-pointer", {
            ["bg-stone-400"]: activeItem === 0,
            ["bg-stone-200"]: activeItem !== 0,
          })}
          onClick={() => setActiveItem(0)}
        />
        <button
          className={classNames("w-4 h-4 rounded-full cursor-pointer", {
            ["bg-stone-400"]: activeItem === 1,
            ["bg-stone-200"]: activeItem !== 1,
          })}
          onClick={() => setActiveItem(1)}
        />
        <button
          className={classNames("w-4 h-4 rounded-full cursor-pointer", {
            ["bg-stone-400"]: activeItem === 2,
            ["bg-stone-200"]: activeItem !== 2,
          })}
          onClick={() => setActiveItem(2)}
        />
      </div>
    </>
  );
}
