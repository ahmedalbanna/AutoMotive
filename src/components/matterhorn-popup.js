const MatterhornPopup = ({ onClose }) => {
  return (
    <div className="relative rounded-5xs bg-primary-contrast w-[900px] flex flex-col p-5 box-border items-start justify-start max-w-full max-h-full overflow-auto sm:p-2.5 sm:box-border">
      <section className="self-stretch relative h-[560px] sm:h-[50.625vw!important]">
        <img
          className="absolute top-[0px] left-[0px] w-[860px] h-[560px] object-cover"
          alt=""
          src="/video-thumbnail@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[860px] h-[560px]" />
        <img
          className="absolute h-[14.29%] w-[9.3%] top-[42.86%] right-[45.35%] bottom-[42.86%] left-[45.35%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/play-icon.svg"
        />
      </section>
    </div>
  );
};

export default MatterhornPopup;
