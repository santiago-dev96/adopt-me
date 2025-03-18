import classNames from "classnames";
import { OlHTMLAttributes } from "react";

export default function PetCards(
  props: OlHTMLAttributes<HTMLOListElement>,
) {
  const { className, ...rest } = props;

  return (
    <ol
      {...rest}
      className={classNames("flex justify-around", className)}
    >
      {props.children}
    </ol>
  );
}
