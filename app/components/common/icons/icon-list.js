import React from "react";

export const Cart = ({ ...props }) => (
  <svg
    {...props}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6097 14.3593C11.506 14.3593 10.6229 15.2423 10.6229 16.346C10.6229 17.4498 11.506 18.3328 12.6097 18.3328C13.7135 18.3328 14.5965 17.4498 14.5965 16.346C14.5965 15.2699 13.6859 14.3593 12.6097 14.3593ZM12.6097 17.1187C12.1958 17.1187 11.8647 16.7875 11.8647 16.3736C11.8647 15.9597 12.1958 15.6286 12.6097 15.6286C13.0236 15.6286 13.3547 15.9597 13.3547 16.3736C13.3547 16.76 12.996 17.1187 12.6097 17.1187Z"
      fill="white"
    />
    <path
      d="M7.36688 14.3593C6.26313 14.3593 5.38012 15.2423 5.38012 16.346C5.38012 17.4498 6.26313 18.3328 7.36688 18.3328C8.47063 18.3328 9.35363 17.4498 9.35363 16.346C9.35363 15.2699 8.44304 14.3593 7.36688 14.3593ZM7.36688 17.1187C6.95297 17.1187 6.62185 16.7875 6.62185 16.3736C6.62185 15.9597 6.95297 15.6286 7.36688 15.6286C7.78079 15.6286 8.11191 15.9597 8.11191 16.3736C8.11191 16.76 7.78079 17.1187 7.36688 17.1187Z"
      fill="white"
    />
    <path
      d="M16.9419 1.66614H18.5872C18.9183 1.66614 19.1666 1.91448 19.1666 2.2732C19.1666 2.63192 18.8631 2.90786 18.532 2.90786H16.8868C16.8316 2.90786 16.7764 2.93545 16.7764 2.99064L15.6174 11.2412C15.4795 12.2622 14.5965 13.0348 13.5755 13.0348H5.95961C5.5457 13.0348 5.18698 12.7589 5.07661 12.3725L3.36579 7.2125V7.15731C3.28301 6.88137 3.36579 6.57784 3.53135 6.35709C3.72451 6.13634 4.00045 5.99837 4.27638 5.99837H5.21245C5.55534 5.99837 5.83331 6.27634 5.83331 6.61923C5.83331 6.96212 5.55534 7.24009 5.21245 7.24009H4.71789L6.20795 11.7655H13.6031C14.017 11.7655 14.3757 11.4619 14.4309 11.048L14.9828 7.24009H14.7875C14.4446 7.24009 14.1666 6.96212 14.1666 6.61923C14.1666 6.27634 14.4446 5.99837 14.7875 5.99837H15.1759L15.6174 2.82508C15.7002 2.16283 16.2797 1.66614 16.9419 1.66614Z"
      fill="white"
    />
    <path
      d="M9.38268 4.43669C9.38268 4.09577 9.65905 3.81941 9.99996 3.81941C10.3409 3.81941 10.6172 4.09577 10.6172 4.43669V8.89657C10.6172 9.23748 10.3409 9.51385 9.99996 9.51385C9.65905 9.51385 9.38268 9.23748 9.38268 8.89657V4.43669Z"
      fill="white"
    />
    <path
      d="M7.77002 7.28391C7.42911 7.28391 7.15274 7.00755 7.15274 6.66663C7.15274 6.32571 7.42911 6.04935 7.77002 6.04935H12.2299C12.5708 6.04935 12.8472 6.32571 12.8472 6.66663C12.8472 7.00755 12.5708 7.28391 12.2299 7.28391H7.77002Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.38268 4.43669C9.38268 4.09577 9.65905 3.81941 9.99996 3.81941C10.3409 3.81941 10.6172 4.09577 10.6172 4.43669L10.6173 6.04936L12.2299 6.04935C12.5708 6.04935 12.8472 6.32571 12.8472 6.66663C12.8472 7.00755 12.5708 7.28391 12.2299 7.28391L10.6173 7.28393L10.6172 8.89657C10.6172 9.23748 10.3409 9.51385 9.99996 9.51385C9.65905 9.51385 9.38268 9.23748 9.38268 8.89657L9.3827 7.28393L7.77002 7.28391C7.42911 7.28391 7.15274 7.00755 7.15274 6.66663C7.15274 6.32571 7.42911 6.04935 7.77002 6.04935L9.3827 6.04936L9.38268 4.43669ZM9.31325 5.97992V4.43671C9.31325 4.05744 9.62071 3.74998 9.99998 3.74998C10.3792 3.74998 10.6867 4.05744 10.6867 4.43671V5.97992H12.2299C12.6092 5.97992 12.9166 6.28738 12.9166 6.66665C12.9166 7.04592 12.6092 7.35338 12.2299 7.35338H10.6867V8.89658C10.6867 9.27585 10.3792 9.58331 9.99998 9.58331C9.62071 9.58331 9.31325 9.27585 9.31325 8.89658V7.35338H7.77004C7.39077 7.35338 7.08331 7.04592 7.08331 6.66665C7.08331 6.28738 7.39077 5.97992 7.77004 5.97992H9.31325Z"
      fill="white"
    />
  </svg>
);

export const Eye = ({ ...props }) => (
  <svg
    {...props}
    width="17"
    height="15"
    viewBox="0 0 17 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.33728 10.555C6.44766 10.555 4.91382 9.02116 4.91382 7.13154C4.91382 5.24191 6.44766 3.70807 8.33728 3.70807C10.2269 3.70807 11.7608 5.24191 11.7608 7.13154C11.7608 9.02116 10.2269 10.555 8.33728 10.555ZM8.33728 4.89403C7.10389 4.89403 6.09978 5.89814 6.09978 7.13154C6.09978 8.36493 7.10389 9.36904 8.33728 9.36904C9.57068 9.36904 10.5748 8.36493 10.5748 7.13154C10.5748 5.89814 9.57068 4.89403 8.33728 4.89403Z"
      fill="white"
    />
    <path
      d="M8.33729 14.2631C5.36448 14.2631 2.55772 12.5237 0.628558 9.50348C-0.209519 8.19893 -0.209519 6.07211 0.628558 4.75965C2.56562 1.73941 5.37239 0 8.33729 0C11.3022 0 14.1089 1.73941 16.0381 4.75965C16.8762 6.0642 16.8762 8.19102 16.0381 9.50348C14.1089 12.5237 11.3022 14.2631 8.33729 14.2631ZM8.33729 1.18596C5.78352 1.18596 3.34045 2.7198 1.63267 5.40006C1.03969 6.32511 1.03969 7.93801 1.63267 8.86306C3.34045 11.5433 5.78352 13.0772 8.33729 13.0772C10.891 13.0772 13.3341 11.5433 15.0419 8.86306C15.6349 7.93801 15.6349 6.32511 15.0419 5.40006C13.3341 2.7198 10.891 1.18596 8.33729 1.18596Z"
      fill="white"
    />
  </svg>
);

export const Delete = ({ ...props }) => (
  <svg
    {...props}
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.16667 0V0.833333H0V2.5H0.833333V13.3333C0.833333 13.7754 1.00893 14.1993 1.32149 14.5118C1.63405 14.8244 2.05797 15 2.5 15H10.8333C11.2754 15 11.6993 14.8244 12.0118 14.5118C12.3244 14.1993 12.5 13.7754 12.5 13.3333V2.5H13.3333V0.833333H9.16667V0H4.16667ZM2.5 2.5H10.8333V13.3333H2.5V2.5ZM4.16667 4.16667V11.6667H5.83333V4.16667H4.16667ZM7.5 4.16667V11.6667H9.16667V4.16667H7.5Z"
      fill="white"
    />
  </svg>
);

export const Plus = ({ ...props }) => (
  <svg
    {...props}
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.75 0C6.29488 0 5.92593 0.36895 5.92593 0.824074V5.92593H0.824074C0.368951 5.92593 0 6.29488 0 6.75C0 7.20512 0.36895 7.57408 0.824074 7.57408H5.92593V12.6759C5.92593 13.1311 6.29488 13.5 6.75 13.5C7.20512 13.5 7.57408 13.1311 7.57408 12.6759V7.57408H12.6759C13.1311 7.57408 13.5 7.20512 13.5 6.75C13.5 6.29488 13.1311 5.92593 12.6759 5.92593H7.57408V0.824074C7.57408 0.368951 7.20512 0 6.75 0Z"
      fill="white"
    />
  </svg>
);

export const Heart = ({ ...props }) => (
  <svg
    {...props}
    width="24"
    height="21"
    viewBox="0 0 24 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6667 6.16175L9.97847 3.87989C9.17389 2.79238 7.89597 2.1 6.48667 2.1C4.0966 2.1 2.1 4.07717 2.1 6.59494C2.1 7.7731 2.28531 8.85523 2.6068 9.86009L2.61113 9.87363C3.38516 12.3506 4.98923 14.3966 6.78942 15.9612C8.5819 17.519 10.4528 18.4977 11.593 18.8964C11.5989 18.8971 11.606 18.8977 11.6142 18.8983C11.6301 18.8994 11.6479 18.9 11.6667 18.9C11.6854 18.9 11.7032 18.8994 11.7191 18.8983C11.7273 18.8977 11.7344 18.8971 11.7403 18.8964C12.8805 18.4977 14.7514 17.519 16.5439 15.9612C18.3441 14.3966 19.9482 12.3506 20.7223 9.87364L20.7265 9.86007C21.048 8.85521 21.2333 7.7731 21.2333 6.59494C21.2333 4.07717 19.2367 2.1 16.8467 2.1C15.4374 2.1 14.1594 2.79238 13.3549 3.87989L11.6667 6.16175ZM10.1511 1.15649C9.10755 0.428204 7.84282 0 6.48667 0C2.905 0 0 2.94944 0 6.59494C0 7.99888 0.221667 9.29663 0.606667 10.5C2.45 16.3989 8.13167 19.9264 10.9433 20.8938C11.34 21.0354 11.9933 21.0354 12.39 20.8938C15.2017 19.9264 20.8833 16.3989 22.7267 10.5C23.1117 9.29663 23.3333 7.99888 23.3333 6.59494C23.3333 2.94944 20.4283 0 16.8467 0C15.4905 0 14.2258 0.428204 13.1823 1.15649C12.6009 1.56221 12.0882 2.06107 11.6667 2.6309C11.2451 2.06107 10.7324 1.56221 10.1511 1.15649Z"
      fill="white"
    />
  </svg>
);