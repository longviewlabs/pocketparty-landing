interface CircleLoopVideoProps {
  className?: string;
}

export function CircleLoopVideo({
  className = "h-20 w-20 md:h-24 md:w-24"
}: CircleLoopVideoProps) {
  return (
    <div
      className={`relative shrink-0 rounded-full overflow-hidden ring-2 ring-purple-400/40 shadow-sm ${className}`}
      aria-hidden="true"
    >
      <video
        src="/looped-video-bottom.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        className="h-full w-full object-cover pointer-events-none select-none [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-panel]:hidden [&::-webkit-media-controls-play-button]:hidden [&::-webkit-media-controls-start-playback-button]:hidden"
      />
    </div>
  );
}

export default CircleLoopVideo;
