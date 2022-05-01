import styled, { keyframes } from "styled-components";

const animation = keyframes`
0% {
  transform:rotate(0deg);
  border-radius: 0px;
}
50% {
  transform:rotate(360deg);
  border-radius: 100px;
}
100% {
  transform:rotate(0deg);
  border-radius: 0px;
}`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return <Wrapper></Wrapper>;
}

export default App;
