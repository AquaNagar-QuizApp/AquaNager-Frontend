import { useEffect, useRef, useState } from "react";

const AudioPlayer = () => {
  const audioRef1 = useRef<HTMLAudioElement | null>(null);
  const audioRef2 = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to start playing audio
  const handleMouseMove = () => {
    const audio1 = audioRef1.current;
    const audio2 = audioRef2.current;

    if (audio1 && audio2 && !isPlaying) {
      audio1.muted = true; // Mute initially to bypass autoplay restrictions

      audio1.play()
        .then(() => {
          setIsPlaying(true);
          audio1.muted = false; // Unmute after the first play attempt
        })
        .catch((err) => {
          console.error("Error while trying to play audio:", err);
        });

      // Set up the loop behavior between two tracks
      audio1.onended = () => {
        audio2.play();
      };

      audio2.onended = () => {
        audio1.play();
      };
    }
  };

  useEffect(() => {
    // Attach mousemove event listener when the component is mounted
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isPlaying]);

  return (
    <div style={{ display: "none" }}>
      <audio ref={audioRef1} loop>
        <source src="/songs/bgm1.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <audio ref={audioRef2} loop>
        <source src="/songs/bgm2.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
