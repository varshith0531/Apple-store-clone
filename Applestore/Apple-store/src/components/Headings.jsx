import React from "react";

const Headings = ({ text, textColor }) => {
  return (
    <div className={`text-[28px] font-SFsemibold text-[#6e6e73]`}>
      <span className={`${textColor}`}>{text[0]}</span>
      <span>&nbsp;{text[1]}</span>
    </div>
  );
};

export default Headings;
