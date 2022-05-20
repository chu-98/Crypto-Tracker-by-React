import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { isDarkAtom } from "../atoms";

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
  color: ${props => props.theme.textColor};
  margin-bottom: 10px;
  border-radius: 24px;
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
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom(prev => !prev);
  const { isLoading, data } = useQuery("allCoins", fetchCoins);

  return (
    <Container>
      <Helmet>
        <title>Coin</title>
      </Helmet>
      <Header>
        <Title>Coin</Title>
        <button onClick={toggleDarkAtom}>Toggle Mode</button>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 50).map(coin => (
            <Coin key={coin.id}>
              <Link
                to={`/${coin.id}`}
                state={{ name: coin.name, rank: coin.rank, id: coin.id }}
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
