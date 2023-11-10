import React from "react";
import classes from "./dashboard.module.css";
import Card from "../../components/Card/Card";
import ShortCard from "../../components/Card/ShortCard";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import GlobalDashboardLayout from "../../Layout/GlobalDashboardLayout";

const options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

const Dashboard = () => {
  return (
    <GlobalDashboardLayout>
      <div className={classes.dashboard_container}>
        <div className={classes.cards_container}>
          <Card
            title="Title"
            text="Text"
            backgroundColor="rgba(94, 53, 177,.6)"
          />
          <Card
            title="Title"
            text="Text"
            backgroundColor="rgba(30, 136, 229,.6)"
          />
          <div className={classes.short_card}>
            <ShortCard
              title="Title"
              text="Text"
              backgroundColor="rgba(30, 136, 229,.6)"
            />
            <ShortCard
              title="Title"
              text="Text"
              backgroundColor="rgba(94, 53, 177,.6)"
            />
          </div>
        </div>
        <div className={classes.charts_container}>
          <div className={classes.bar_container}>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
          <div className={classes.line_container}>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
        </div>
      </div>
    </GlobalDashboardLayout>
  );
};

export default Dashboard;
