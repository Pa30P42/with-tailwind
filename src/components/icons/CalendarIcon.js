import * as React from "react";

const CalendarIcon = (props) => {
  const { color, width, height } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 10}
      height={height || 8.571}
      fill="none"
      {...props}
    >
      <path
        fill={color || "#0D38CE"}
        d="M0 0v1.42h10V0H0Zm0 2.14v6.43h10V2.14H0Zm3.79 1.44.51.5-1.23 1.27L4.3 6.62l-.51.5-1.71-1.77 1.71-1.77Zm2.41 0 1.71 1.77L6.2 7.12l-.51-.5 1.23-1.27-1.23-1.27.51-.5Z"
      />
    </svg>
  );
};
export default CalendarIcon;
