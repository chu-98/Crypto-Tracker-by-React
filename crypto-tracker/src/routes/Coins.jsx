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
  padding: 0px 30px;
`;
const Coin = styled.li`
  background-color: white;
  color: ${props => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 20px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in-out;
    display: block;
  }
  :hover {
    color: ${props => props.theme.accentColor};
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.accentColor};
`;

const coins = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "luna-terra",
    name: "Terra",
    symbol: "LUNA",
    rank: 9,
    is_new: false,
    is_active: true,
    type: "coin",
  },
];

function Coins() {
  return (
    <Container>
      <Header>
        <Title>Coin</Title>
      </Header>

      <CoinsList>
        {coins.map(coin => (
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`}>{coin.symbol} &rarr;</Link>
          </Coin>
        ))}
      </CoinsList>
    </Container>
  );
}

export default Coins;
