import { useEffect, useState } from "react"

export default function Shinchan() {

    const [dancingshinchan, setdancingshinchan] = useState(false);

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


    if (dancingshinchan) {
        return (
            <div>
                <audio autoPlay src="/assets/shinchan_theme_song.mp3" />
                <img src="https://i.pinimg.com/originals/b3/55/b9/b355b9d38b108b906eed4ee36d7b31da.gif" height="500px" width="500px" />
                <h1>shinchan is dancing</h1>
            </div>
        )
    }
    else {

        return (
            <div>
                <img src="https://res.cloudinary.com/dzdgpwtox/image/upload/w_450,c_scale,f_auto/v1630928437/final_designs/seller_design_294646/f_20210906114036.png" height="500px" width="500px" />
                <h1>shinchan is not dancing</h1>
            </div>
        );

    }

}