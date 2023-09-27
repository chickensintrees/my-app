import React, { useEffect, useRef, useState } from 'react';
import './myStyles.css';

function LoopingAudio() {
  const audioRef = useRef();
  const [isPlaying, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handlePlay = () => {
    const currentTime = new Date().getTime();
    const loopTime = audioRef.current.duration * 1000; // Convert audio duration to milliseconds
    const positionInLoop = currentTime % loopTime;

    if (audioRef.current.paused) {
        audioRef.current.currentTime = positionInLoop / 1000; // Convert back to seconds
        setPlaying(true);
    } else {
        setPlaying(false);
    }
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
        audioRef.current.play();
    } else if (audioRef.current) {
        audioRef.current.pause();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isPlaying]);

  return (
    <div>
      <button onClick={handlePlay} disabled={!loaded} className="center">Activate Wave Distorter</button>
      <audio ref={audioRef} src={"/audio/Resonate_mixdown4.mp3"} loop onLoadedData={() => setLoaded(true)} />
    </div>
  );
}

export default LoopingAudio;