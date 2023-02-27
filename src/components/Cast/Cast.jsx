import React from "react";
import { useParams } from "react-router-dom";
import Notiflix from "notiflix";
import { useEffect, useState } from "react";
import { Loader } from "components/Loader/Loader";
import { getMovieCredits } from "Api/Api";
import { Ul, Li, Title, Text } from "./Cast.styled";

export const Cast = () => {
    const [actors, setActors] = useState([]);
    const [status, setStatus] = useState('idle');
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        setStatus('loading');

        const getCastbyFilm = async () => {
            const { cast } = await getMovieCredits(id);

            if (cast === 0) {
                Notiflix.Notify.info('Sorry, No actors list :(');
                return;
            }
            setActors(cast);
            setStatus('fulfilled');
        }
        getCastbyFilm()
            .catch((error) => {
                Notiflix.Notify.warning(`Something went wrong! ${error}`);
                setStatus('error');
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id])

    if (status === 'idle' || loading) {
        return <Loader />
    }

    if (status === 'error') {
        return <> Error, Something went wrong!</>
    }

    if (actors.length === 0) {
        return <Title>There is no cast list for this movie!</Title>
    }
    
    return <Ul>
        {actors.map(({ credit_id
, name, character, popularity, profile_path }) => {
            return <Li key={credit_id}>
                {profile_path
                    ? <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                        alt={name} width="220px" height="280px" />
                    : <img src="https://www.seekpng.com/png/small/245-2454602_tanni-chand-default-user-image-png.png"
                        alt={name} width="220px" height="280px" />}
                <Title>{name}</Title>
                <Text>Character: {character}</Text>
                <Text>Popularity: {popularity}%</Text>
            </Li>
        })}
    </Ul>
};

export default Cast;