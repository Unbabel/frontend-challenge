import * as cn from "classnames";
import * as React from "react";

export interface ISvgIconProps {
  svg: string;
  className?: string;
  title?: string;
}

export function SvgIcon(props: ISvgIconProps) {
  return (
    <span
      className={cn(props.className)}
      dangerouslySetInnerHTML={{ __html: props.svg }}
      title={props.title}
    />
  );
}
