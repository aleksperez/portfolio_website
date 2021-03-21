import React, { useState } from "react";
import { Photography } from "../pages/media/photography";
import { Videography } from "../pages/media/videography";
import { Tabs, Tab } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

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

export const Media = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <div className="mad-container">
        <div>
          <StyledTabs
            value={selectedTab}
            onChange={handleChange}
            aria-label="media-tabs"
            centered
          >
            <StyledTab label="photography"></StyledTab>
            <StyledTab label="videography"></StyledTab>
          </StyledTabs>
          {selectedTab === 0 && <Photography />}
          {selectedTab === 1 && <Videography />}
        </div>
      </div>
    </>
  );
};

export default Media;
