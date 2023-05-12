import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

type Props = {
  handleClick: (e: React.MouseEvent<SVGSVGElement>) => void;
  isStared: Boolean;
};

const StarToggle = (props: Props) => {
  return (
    <>
      {props.isStared ? (
        <StarIcon onClick={(e) => props.handleClick(e)} />
      ) : (
        <StarBorderIcon onClick={(e) => props.handleClick(e)} />
      )}
    </>
  );
};

export default StarToggle;
