"use client";
import { useRef, useState, useEffect } from 'react';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';

export default function MusicControl() {
    const audioRef = useRef(null);
    const [muted, setMuted] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = 0.2; // optional low volume

        // Play music on first user interaction
        const enableMusic = () => {
            audio.muted = false;
            setMuted(false);
            audio.play().catch(() => { });
        };

        document.addEventListener("click", enableMusic, { once: true });

        return () => {
            document.removeEventListener("click", enableMusic);
        };
    }, []);

    const toggleMute = () => {
        const audio = audioRef.current;
        audio.muted = !audio.muted;
        setMuted(audio.muted);
    };

    return (
        <>
            <audio ref={audioRef} src="/music.mp3" loop autoPlay muted />
            <button
                onClick={toggleMute}
                className="fixed bottom-5 right-5 z-50 p-2 bg-black/40 backdrop-blur rounded-full shadow-md hover:scale-110 transition-all"
            >
                {muted ? <FiVolumeX size={24} color='white' /> : <FiVolume2 size={24} color='white' />}
            </button>
        </>
    );
}