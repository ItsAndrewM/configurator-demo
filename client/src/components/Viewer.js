import { useEffect, useRef } from "react";
import ViewerIframe from "./ViewerIframe";

const Viewer = () => {
    const viewerIframeRef = useRef(null);

    useEffect(() => {
        let client = new window.Sketchfab(viewerIframeRef.current);
        client.init(process.env.REACT_APP_UID, {
            success: (api) => {
                api.load();
                api.start();
                console.log(api);
                api.addEventListener('modelLoadProgress', (eventData) => {

                    console.log(eventData)
                })
            },
            error: () => { console.log("error with viewer") },
            autostart: 1,
            transparent: 1,
            ui_infos: 0,
            ui_stop: 0,
            ui_controls: 0,
            ui_loading: 0
        })
    }, [])


    return (
        <ViewerIframe viewerIframeRef={viewerIframeRef} />
    );
}

export default Viewer;