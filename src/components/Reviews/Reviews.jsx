import React from "react";
import { useParams } from "react-router-dom";
import Notiflix from "notiflix";
import { useEffect, useState } from "react";
import { getMovieReviews } from "Api/Api";
import { Loader } from "components/Loader/Loader";
import { Ul, Li, Title, Text  } from "./Reviews.styled";

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState('idle');
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        setStatus('loading');

        const getReviewsbyFilm = async () => {
            const { results } = await getMovieReviews(id);

            if (results === 0) {
                Notiflix.Notify.info('Sorry, No reviews list :(');
                return;
            }
            setReviews(results);
            setStatus('fulfilled');
        }
        getReviewsbyFilm()
            .catch((error) => {
                Notiflix.Notify.warning(`Something went wrong! ${error}`);
                setStatus('error');
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (status === 'idle' || loading) {
        return <Loader />
    };

    if (status === 'error') {
        return <> Error, Something went wrong!</>
    };

    if (reviews.length === 0) {
        return <Title>No reviews. You will be the first to leave a review!</Title>
    };

    return <Ul>
        {reviews.map(({ author, content, id }) => {
            return <Li key={id}>
                <Title>Author: {author}</Title>
                <Text>{content}</Text>
            </Li>
        })}
    </Ul>
};

export default Reviews;