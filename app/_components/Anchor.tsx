import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

export default function Anchor(
  props: AnchorHTMLAttributes<HTMLAnchorElement> & { next?: boolean },
) {
  const { next = false, children, href, ...rest } = props;

  if (!href) {
    throw new Error("An Anchor component must have an href attribute");
  }

  return next
    ? <Link href={href} {...rest}>{children}</Link>
    : <a href={href} {...rest}>{children}</a>;
}
