import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = ({ ...props }) => {
  const rowCount = 4; // Number of rows
  const columnCount = 5; // Number of columns
  const rectWidth = 250;
  const rectHeight = 360;
  const rectSpacingX = 265; //Horizontal spacing between rectangles
  const rectSpacingY = 375; //Vertical spacing between rectangles
  const rectanglesCount = rowCount * columnCount;

  return (
    <ContentLoader
      speed={2}
      width={1400}
      height={2000}
      viewBox="0 0 1400 2000"
      backgroundColor="#d9d9d9"
      foregroundColor="#fbfbfb"
      {...props}
    >
      {generateRectangles()}
    </ContentLoader>
  );
};

export default Skeleton;
