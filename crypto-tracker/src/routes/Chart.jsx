import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { useOutletContext } from "react-router";
import { fetchCoinHistory } from "../api";

function Chart() {
  const coinID = useOutletContext();
  const { isLoading, data } = useQuery(
    ["ohlcv", coinID],
    () => fetchCoinHistory(coinID),
    {
      refetchInterval: 5000,
    }
  );
  console.log(fetchCoinHistory(coinID));
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "",
              data: data?.map(price => price.close.toFixed(2)),
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: {
              show: false,
            },
            stroke: {
              curve: "smooth",
              width: 3,
            },
            xaxis: {
              type: "datetime",
              categories: data?.map(x => x.time_close),
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
            },
            colors: ["blue"],
            tooltip: {
              y: {
                formatter: value => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
