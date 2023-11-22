import styled,{ ThemeProvider } from "styled-components";
import './App.css';
import { darkTheme } from "./utils/Theams";
import Navbar from './componants/Navbar';
import Hero from './componants/HeroSection';
import Skills from './componants/Skills';
import Education from "./componants/Education";

const Body = styled.div`
backround-color : ${({theme})=> theme.bg};
width: 100%; 
height: 100%;
overflow-x: hidden;
`;

const Wrapper = styled.div
`
  background: linear-gradient(
      38.73deg.
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
  ).
      linear-gradient(
      141.27deg.
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
  );
  width: 100%;
  clip-path: polygon (0 0, 100% 0, 100% 100%, 30% 98%, 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar/>
      <Body>
        <Hero/>
        <Wrapper>
        <Skills/>
        <Education/>
        </Wrapper>
      </Body>
    </ThemeProvider>
  );
}

export default App;
