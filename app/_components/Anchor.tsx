import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import { base as buttonBase, variants as buttonVariants } from "./Button";
import classNames from "classnames";

const variants = {
  default: "",
  primaryButton: classNames(buttonBase, buttonVariants.primary),
};

export default function Anchor(
  props: AnchorHTMLAttributes<HTMLAnchorElement> & {
    next?: boolean;
    variant?: keyof typeof variants;
  },
) {
  const {
    next = false,
    children,
    href,
    className,
    variant = "default",
    ...rest
  } = props;

  if (!href) {
    throw new Error("An Anchor component must have an href attribute");
  }

  return next
    ? (
      <Link
        href={href}
        className={classNames(variants[variant], className)}
        {...rest}
      >
        {children}
      </Link>
    )
    : (
      <a
        href={href}
        className={classNames(variants[variant], className)}
        {...rest}
      >
        {children}
      </a>
    );
}
