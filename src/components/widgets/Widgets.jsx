import React from "react";
import "./widgets.scss";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { PersonOutline } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widgets = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        counter: "2365",
        percentage: "21%",
        link: "See All Users",
        icon: (
          <PersonOutline
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255,0,0,0.2)",
              borderRadius: "20%",
            }}
          />
        ),
        diff: "postive",
        diffIcon: <KeyboardDoubleArrowUpIcon />,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        counter: "8725",
        percentage: "5%",
        link: "View All Orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218,165,32,0.2)",
              borderRadius: "20%",
            }}
          />
        ),
        diff: "negative",
        diffIcon: <KeyboardDoubleArrowDownIcon />,
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        counter: "$9286",
        percentage: "7%",
        link: "Your Earnings",
        icon: (
          <PaidOutlinedIcon
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0,128,0,0.2)",
              borderRadius: "20%",
            }}
          />
        ),
        diff: "postive",
        diffIcon: <KeyboardDoubleArrowUpIcon />,
      };
      break;
    case "balance":
      data = {
        title: "Balance",
        counter: "$12365",
        percentage: "17%",
        link: "Your Balance",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128,0,128,0.2)",
              borderRadius: "20%",
            }}
          />
        ),
        diff: "postive",
        diffIcon: <KeyboardDoubleArrowUpIcon />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.counter}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className={`percentage ${data.diff}`}>
          {data.diffIcon} {data.percentage}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
