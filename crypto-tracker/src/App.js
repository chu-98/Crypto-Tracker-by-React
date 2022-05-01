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
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.bgColor};
`;
const Text = styled.h2`
  font-size: 24px;
  color: ${props => props.theme.textColor};
`;

function App() {
  return (
    <Wrapper>
      <Text>Hello</Text>
    </Wrapper>
  );
}

export default App;
