import { Ref, SVGProps, forwardRef, memo } from 'react';

const CloseIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="26"
    height="26"
    ref={ref}
    {...props}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.9772 3.02254L3.05477 22.945M3.05469 3.02246L22.9772 22.945"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const ForwardRef = forwardRef(CloseIcon);
const Memo = memo(ForwardRef);

export default Memo;
