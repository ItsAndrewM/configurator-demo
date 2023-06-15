import styled from "styled-components/macro";

const ViewerIframe = ({ viewerIframeRef }) => {
    return (
        <Wrapper>
            <Iframe
                // We feed the ref to the iframe component to get the underlying DOM object
                ref={viewerIframeRef}
                title="sketchfab-viewer"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share allowfullscreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                loading="lazy"
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 37vw;
    height: 706px;
`

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;

`

export default ViewerIframe;