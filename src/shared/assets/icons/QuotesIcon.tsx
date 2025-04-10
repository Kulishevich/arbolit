import { Ref, SVGProps, forwardRef, memo } from 'react';

const QuotesIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="94"
    height="69"
    viewBox="0 0 94 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M38.2373 53.2819C38.2373 62.8726 30.0056 69 19.6497 69C5.57627 69 0 59.4093 0 46.888C0 24.2432 14.8701 8.25869 24.1638 0L31.0678 5.86101C23.1017 13.8533 18.5876 23.9768 18.5876 31.4363C18.5876 33.5676 18.8531 35.4324 19.6497 37.0309C32.1299 37.0309 38.2373 43.6911 38.2373 53.2819ZM94 53.2819C94 62.8726 85.7684 69 75.4124 69C61.339 69 55.7627 59.4093 55.7627 46.888C55.7627 24.2432 70.6328 8.25869 79.9266 0L86.8305 5.86101C78.8644 13.8533 74.3503 23.9768 74.3503 31.4363C74.3503 33.5676 74.6158 35.4324 75.4124 37.0309C87.8927 37.0309 94 43.6911 94 53.2819Z"
      fill="#E9E8E5"
    />
  </svg>
);
const ForwardRef = forwardRef(QuotesIcon);
const Memo = memo(ForwardRef);

export default Memo;
