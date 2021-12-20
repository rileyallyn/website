import { useState, useEffect, useRef } from "react";


interface MusicPlayerProps { 
	url: string;
}
type MusicPlayer = [boolean, () => void];
const useMusicPlayer = ({ url }: MusicPlayerProps): MusicPlayer => { 
	const musicPlayer = useRef<HTMLAudioElement | undefined>(
		typeof Audio !== "undefined" ? new Audio(url) : undefined
	);
	const [ playing, setPlaying ] = useState(false);

	const toggle = () => setPlaying(!playing);

	useEffect(() => {
		playing ? musicPlayer.current?.play() : musicPlayer.current?.pause();
	}, [ playing ]);
	
	useEffect(() => {
		musicPlayer.current?.addEventListener("ended", () => musicPlayer.current?.play());
		return () => {
			musicPlayer.current?.removeEventListener("ended", () => setPlaying(false));
		};
	}, []);
	return [ playing, toggle ];
};


export default useMusicPlayer;