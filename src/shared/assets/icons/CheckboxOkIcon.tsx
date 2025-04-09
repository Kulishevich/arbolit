import { Ref, SVGProps, forwardRef, memo } from 'react';

const CheckboxOkIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="22"
    height="23"
    viewBox="0 0 22 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    ref={ref}
  >
    <g clipPath="url(#clip0_60_111)">
      <path
        d="M21.5271 0.691223C19.719 1.81814 17.6754 3.43148 15.7539 5.25089C14.2053 6.71755 12.5536 8.48498 11.0239 10.3118C9.96856 11.5743 8.83074 13.0428 7.80293 14.4705C7.44543 14.968 6.52074 16.301 6.23027 16.741C6.08074 16.9675 5.99824 17.077 5.98106 17.0715C5.96731 17.0678 4.65934 16.2732 3.07637 15.3078L0.197461 13.5496L0.132149 13.6295C0.0977739 13.674 0.0599614 13.7223 0.0513676 13.739C0.0358989 13.7687 0.279961 14.0769 6.50356 21.8725L7.00371 22.5H7.07246H7.14121L7.53137 21.659C9.45809 17.517 11.3504 14.1066 13.4972 10.9059C15.8639 7.38034 18.5434 4.13325 21.5581 1.14236C21.7729 0.92886 21.9482 0.748775 21.9482 0.74135C21.9482 0.732067 21.8296 0.550127 21.8073 0.525991C21.8039 0.524136 21.6784 0.598396 21.5271 0.691223Z"
        fill="#1F3D5F"
      />
    </g>
    <defs>
      <clipPath id="clip0_60_111">
        <rect
          width="22"
          height="22"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CheckboxOkIcon);
const Memo = memo(ForwardRef);

export default Memo;
