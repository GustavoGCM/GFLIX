import Link from "next/link"
import Image from "next/image"

interface MovieCardProps {
    posterPath: string
    title: string
    id: number
}

const MovieCard = ({posterPath, title, id}: MovieCardProps) => {

    return (
        <>
            <Link className="z-40 max-w-[223px]" key={id} href={`/movie/${id}`}>
                <li className="poster-card">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${posterPath}`}
                    alt="Movie poster"
                    width={223}
                    height={293}
                    className="poster-image"
                  ></Image>
                  <h2 className="text-center">{title}</h2>
                </li>
              </Link>
        </>
    )
}

export default MovieCard