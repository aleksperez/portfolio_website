import React, { useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
//tabs
import {Illustration} from "../pages/design/illustration";
import {Painting} from "../pages/design/painting";
import {Tattoos} from "../pages/design/tattoos";


const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 50,
      width: "100%",
      backgroundColor: "#ffd341",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles(() => ({
  root: {
    display: "flex",
    textTransform: "uppercase",
    color: "#00000",
    fontSize: "1.4rem",
    fontFamily: "Bebas Neue",
    justifyContent: "center",
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

export const Design = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <div className="mad-container">
        <div className="tabs-container">
          <div className="container">
            <StyledTabs
              value={selectedTab}
              onChange={handleChange}
              aria-label="media-tabs"
              centered
            >
              <StyledTab label="illustration"></StyledTab>
              <StyledTab label="painting"></StyledTab>
              <StyledTab label="tattoos"></StyledTab>
              <StyledTab label="murals"></StyledTab>
            </StyledTabs>
            {selectedTab === 0 && <Illustration />}
            {selectedTab === 1 && <Painting />}
            {selectedTab === 2 && <Tattoos />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
