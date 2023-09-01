import { useState, useCallback } from "react";
import MatterhornPopup from "./matterhorn-popup";
import PortalPopup from "./portal-popup";

const Video = () => {
  const [isMatterhornPopup3Open, setMatterhornPopup3Open] = useState(false);

  const openMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(true);
  }, []);

  const closeMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(false);
  }, []);

  return (
    <>
      <video
        className="relative w-[25px] h-[25px] overflow-hidden shrink-0 cursor-pointer"
        controls
        onClick={openMatterhornPopup3}
      >
        <source />
      </video>
      {isMatterhornPopup3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup3}
        >
          <MatterhornPopup onClose={closeMatterhornPopup3} />
        </PortalPopup>
      )}
    </>
  );
};

export default Video;
