import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import { base as buttonBase, variants as buttonVariants } from "./Button";
import classNames from "classnames";
import { UrlObject } from "url";

const variants = {
  default: "",
  primaryButton: classNames(buttonBase, buttonVariants.primary),
};

export default function Anchor(
  props: AnchorHTMLAttributes<HTMLAnchorElement> & {
    next?: boolean;
    variant?: keyof typeof variants;
    href: string | UrlObject;
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
