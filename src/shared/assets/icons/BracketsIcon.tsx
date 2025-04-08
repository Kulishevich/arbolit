import { Ref, SVGProps, forwardRef, memo } from 'react';

const BracketsIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="55"
    height="55"
    viewBox="0 0 55 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    ref={ref}
  >
    <path
      d="M1 55V27.584C1 25.3807 1.87527 23.2676 3.43327 21.7096L21.7096 3.43327C23.2676 1.87527 25.3807 1 27.584 1H55"
      stroke="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(BracketsIcon);
const Memo = memo(ForwardRef);

export default Memo;
