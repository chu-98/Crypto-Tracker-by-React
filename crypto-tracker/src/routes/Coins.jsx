import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinsList = styled.ul`
  padding: 0px 25px;
`;
const Coin = styled.li`
  background-color: white;
  color: ${props => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 20px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in-out;
  }
  :hover {
    color: ${props => props.theme.accentColor};
  }
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
const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 12px;
`;

function Coins() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await res.json();
      setCoins(json.slice(0, 50));
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Coin</Title>
      </Header>

      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {coins.map(coin => (
            <Coin key={coin.id}>
              <Link
                to={`/${coin.id}`}
                state={{ name: coin.name, rank: coin.rank }}
              >
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
