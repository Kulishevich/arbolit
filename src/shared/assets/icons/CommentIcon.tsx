import { Ref, SVGProps, forwardRef, memo } from 'react';

const CommentIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M35.0004 0H6.99957C3.13426 0 0 3.11193 0 6.95231V29.1205C0 32.9582 2.69719 35.4375 6.5625 35.4375H15.2762L21 42.0013L26.7238 35.4375H35.4375C39.3028 35.4375 42 32.9582 42 29.1205V6.95231C42 3.11193 38.8657 0 35.0004 0Z"
      fill="white"
    />
  </svg>
);
const ForwardRef = forwardRef(CommentIcon);
const Memo = memo(ForwardRef);

export default Memo;
