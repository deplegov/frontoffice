import { Icon } from "@mui/material";
import PropTypes from "prop-types";

export default function Reacts({ active, hide }) {
  const icons = [
    {
      active: "thumb_up",
      activeColor: "#00f",
      inactive: "thumb_up_off_alt",
    },
    {
      active: "thumb_down",
      activeColor: "#f00",
      inactive: "thumb_down_off_alt",
    },
    {
      active: "favorite",
      activeColor: "#f00",
      inactive: "favorite_border",
    },
    {
      active: "insert_emoticon",
      activeColor: "#f90",
      inactive: "insert_emoticon_outlined",
    },
    {
      active: "sentiment_dissatisfied",
      activeColor: "#f00",
      inactive: "sentiment_dissatisfied_outlined",
    },
  ];

  return (
    <>
      {icons.map((icon, index) => {
        if (!hide) {
          if (active === index)
            return (
              <Icon key={index} style={{ color: icon.activeColor }}>
                {icon.active}
              </Icon>
            );
          else return <Icon key={index}>{icon.inactive}</Icon>;
        } else {
          return (
            <Icon key={index} style={{ color: "#999", cursor: "not-allowed" }}>
              {icon.inactive}
            </Icon>
          );
        }
      })}
    </>
  );
}

Reacts.propTypes = {
  active: PropTypes.number,
  hide: PropTypes.bool,
};
