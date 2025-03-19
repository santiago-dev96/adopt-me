import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

export const base = "uppercase font-bold py-2 px-4 shadow-xl";

export const variants = {
  primary: "bg-purple-700 text-white",
};

type Variant = keyof typeof variants;

export default function Button(
  props: ButtonHTMLAttributes<HTMLButtonElement> & { variant: Variant },
) {
  const { children, className, variant, ...rest } = props;
  return (
    <button
      className={classNames(base, variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
