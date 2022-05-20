import { useQuery } from "react-query";
import { useOutletContext } from "react-router";
import styled from "styled-components";
import { fetchTodayPrice } from "../api";

const Loader = styled.div`
  text-align: center;
  margin: 30px;
`;
const Wrapper = styled.div`
  margin: 24px;
`;
const List = styled.div`
  background-color: #212121;
  border-radius: 24px;
  margin-bottom: 24px;
  padding: 12px 24px;
  font-size: 24px;
  display: flex;
  align-items: center;
  p {
    display: flex;
    font-size: 30px;
    font-weight: 600;
    margin-right: 6px;
  }
`;

function Price() {
  const coinID = useOutletContext();
  const { isLoading, data } = useQuery(["price", coinID], () =>
    fetchTodayPrice(coinID)
  );
  const today = new Date();
  const date = today.toLocaleDateString();
  console.log(fetchTodayPrice(coinID));
  return (
    <div>
      {isLoading ? (
        <Loader>"Loading price..."</Loader>
      ) : (
        <Wrapper>
          <List>
            <p>DATE | </p> {date}
          </List>
          <List>
            <p>CURRENT_PRICE | </p> ${data[0].close.toFixed(2)}
          </List>
          <List>
            <p>HIGH | </p> ${data[0].high.toFixed(2)}
          </List>
          <List>
            <p>LOW | </p> ${data[0].low.toFixed(2)}
          </List>
        </Wrapper>
      )}
    </div>
  );
}

export default Price;
