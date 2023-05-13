import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "@mui/material";

type Props = {
  handleClick: (e: React.MouseEvent<SVGSVGElement>) => void;
  isStared: Boolean;
};

const StarToggle = (props: Props) => {
  return (
    <div>
      <Button>
        {props.isStared ? (
          <StarIcon onClick={(e) => props.handleClick(e)} />
        ) : (
          <StarBorderIcon onClick={(e) => props.handleClick(e)} />
        )}
      </Button>
    </div>
  );
};

export default StarToggle;
