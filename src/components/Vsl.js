import React from "react";
import IframePlayer from "player-iframe-video";
import "player-iframe-video/dist/index.css";
import "./index.css";

const Vsl = () => {
  const iFrame = <iframe width="100%" height="100%"
                         src="https://player.vimeo.com/video/422883518?h=aee925f4ae&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;loop=1"
                         frameBorder="0"
                         allow="autoplay; fullscreen; picture-in-picture"
                         allowFullScreen
                         player_id="0"
                         title="test player iframe vimeo" />

  return <div className="root">
    <div className="divRoot">
      <IframePlayer id={"iframe-vimeo-player-test"} iFrame={iFrame} />
    </div>
  </div>;
};

export default React.memo(Vsl);