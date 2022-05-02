import { useEffect, useState } from "react";
import { Outlet, useLocation, useMatch, useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  margin: 36px 0px;
  color: ${props => props.theme.accentColor};
`;
const Loader = styled.div`
  text-align: center;
  margin-top: 30px;
`;
const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  margin: 0px 12px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 12px;
  line-height: 1.4;
`;
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 12px;
  gap: 10px;
`;
const Tab = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${props =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

function Coin() {
  const { coinID } = useParams();
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();
  const [info, setInfo] = useState({});
  const [price, setPrice] = useState({});
  const priceMatch = useMatch("/:coinID/price");
  const chartMatch = useMatch("/:coinID/chart");

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinID}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinID}`)
      ).json();
      setInfo(infoData);
      setPrice(priceData);
      setLoading(false);
    })();
  }, [coinID]);

  return (
    <Container>
      <Header>
        <Title>
          {state?.name ? state.name : loading ? "Loading..." : info?.name}
        </Title>
      </Header>

      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{info?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>{info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{info?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{info?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply:</span>
              <span>{price?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{price?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinID}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinID}/price`}>Price</Link>
            </Tab>
          </Tabs>
          <Outlet />
        </>
      )}
    </Container>
  );
}

export default Coin;
