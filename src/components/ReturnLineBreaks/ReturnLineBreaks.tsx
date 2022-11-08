import React from "react";

export const returnLineBreaks = (text: string) => {
  if (text.includes("<br/>")) {
    // Map through each segment of text around line breaks added:
    return text.split("<br/>").map((innerText: any, i: number) => {
      const lineBreakStyle = {
        display: "block",
        minHeight: "24px",
      };
      // Return a span around each group of text:
      return (
        <span key={i} style={lineBreakStyle}>
          {innerText}
        </span>
      );
    });
  } else {
    // If there's no line breaks, just return the text as is:
    return text;
  }
};
