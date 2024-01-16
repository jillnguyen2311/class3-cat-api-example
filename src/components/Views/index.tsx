import Image from "next/image";

export default function Views({
    path="",
    alternative="",
    height=0,
    width=0
}) {
    return(
        <Image src={path} alt={alternative} height={height} width={width} priority/>
    )
}