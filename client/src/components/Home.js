import styled from "styled-components/macro";
import Viewer from "./Viewer";
import Sidebar from "./Sidebar";

const Home = () => {
    return (
        <Wrapper>
            <Sidebar />
            <Viewer />
            <Sidebar />
        </Wrapper>
    );
}

const Wrapper = styled.div`
width: 100vw;
max-width: 100vw;
min-height: 100vh;
max-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
export default Home;