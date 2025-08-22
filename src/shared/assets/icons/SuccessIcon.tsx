import { Ref, SVGProps, forwardRef, memo } from 'react';

const SuccessIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="36"
    height="36"
    ref={ref}
    {...props}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 33C10.9289 33 7.39339 33 5.1967 30.8032C3 28.6066 3 25.071 3 18C3 10.9289 3 7.39339 5.1967 5.1967C7.39339 3 10.9289 3 18 3C25.071 3 28.6066 3 30.8032 5.1967C33 7.39339 33 10.9289 33 18C33 25.071 33 28.6066 30.8032 30.8032C28.6066 33 25.071 33 18 33ZM24.0454 13.4545C24.4848 13.8938 24.4848 14.6062 24.0454 15.0454L16.5454 22.5454C16.1061 22.9848 15.3939 22.9848 14.9545 22.5454L11.9545 19.5454C11.5152 19.1061 11.5152 18.3939 11.9545 17.9545C12.3938 17.5152 13.1062 17.5152 13.5455 17.9545L15.75 20.1589L22.4545 13.4545C22.8939 13.0152 23.6061 13.0152 24.0454 13.4545Z"
      fill="#FCFCFC"
    />
  </svg>
);
const ForwardRef = forwardRef(SuccessIcon);
const Memo = memo(ForwardRef);

export default Memo;
