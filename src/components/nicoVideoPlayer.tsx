'use client';
import { useEffect, useRef } from "react";

type Props = {
    id: string,
    width: number,
    height: number,
};

export default function NicovideoPlayer(props: Props) {
    const { id, width, height } = props;

    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const divElm = divRef.current;
        if (divElm === null) return;

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://embed.nicovideo.jp/watch/${id}/script?w=${width}&h=${height}`;

        divElm.appendChild(script);

        return () => {
            while (divElm.firstChild) {
                divElm.removeChild(divElm.firstChild);
            }
        };
    }, [height, id, width]);

    return (
        <div ref={divRef} />
    );
}