import { LabelHTMLAttributes, ReactNode } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export function Label(props: LabelProps) {
  return (
    <label {...props} className="font-semibold">
      {props.children}
    </label>
  );
}
