import { useState } from "react";
import { useLocation, useParams } from "react-router";
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

function Coin() {
  const { coinID } = useParams();
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
        <Title>{state?.rank || "Loading..."}순위</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}{" "}
    </Container>
  );
}

export default Coin;
