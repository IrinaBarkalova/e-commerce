import React from 'react';

const Icon: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return <img {...props} src={props.src} alt={'label'} />;
};
export default Icon;
