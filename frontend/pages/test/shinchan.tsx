import { useEffect, useRef, useState } from "react"

export default function Shinchan() {

    const [dancingshinchan, setdancingshinchan] = useState(false);

    const audio = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        addEventListener("keydown", (ev) => {
            console.log(ev.key);
            if (ev.key == ' ') {
                setdancingshinchan(true);

            }
        });
        addEventListener("keyup", (ev) => {
            console.log(ev.key);
            if (ev.key == ' ') {
                setdancingshinchan(false);
            }
        });
        addEventListener("touchstart", () => setdancingshinchan(true));
        addEventListener("touchend", () => setdancingshinchan(false));
    }, [])

    useEffect(() => {
        if (dancingshinchan) {
            audio.current?.play();
        }
        else {
            audio.current?.pause();
        }
    }, [dancingshinchan])

    return (
        <div>
            <audio ref={audio} src="/assets/shinchan_theme_song.mp3" />
            <img src={dancingshinchan ? "/assets/shinchan_dancing.gif" : "/assets/shinchan_not_dancing.png"} height="500px" width="500px" />
            <h1>shinchan is {dancingshinchan ? "" : "not"} dancing</h1>
        </div>
    )


}