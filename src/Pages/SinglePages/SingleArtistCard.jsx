import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function SingleArtistCard(artist) {
    artist = artist.artist
    console.log(artist)
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={artist.proPic} />
            <Card.Body>
                <Card.Title>{artist.name}</Card.Title>
                <Card.Text>
                    {artist.members === ''&& ('')}
                    {artist.members === '1'&& (<span>Solo</span>)}
                    {artist.members > '1'&& (<span>Band: {artist.members} components</span>)}
                </Card.Text>
                <Card.Text>
                    <span>Genre: </span>
                    {artist.genre.map((genre, i) => {
                        const genToUp = genre.charAt(0).toUpperCase() + genre.slice(1);
                        return (
                            <>
                                {i + 1 !== artist.genre.length && (
                                    <span>{genToUp}, </span>
                                )}
                                {i + 1 === artist.genre.length && (
                                    <span>{genToUp}</span>
                                )}

                            </>
                        )
                    })}
                </Card.Text>
                <Card.Text>
                    {artist.instruments.length > 0 && (
                        <>
                            <span>Instruments: </span>

                            {artist.instruments.map((instrument, i) => {
                                const insToUp = instrument.charAt(0).toUpperCase() + instrument.slice(1);
                                return (
                                    <>
                                        {i + 1 !== artist.instruments.length && (
                                            <span>{insToUp}, </span>
                                        )}
                                        {i + 1 === artist.instruments.length && (
                                            <span>{insToUp}</span>
                                        )}

                                    </>
                                )
                            })}

                        </>
                    )}


                </Card.Text>
                <Card.Text style={{ fontSize: '0.8rem' }}>
                    <em>
                        <div>{artist.region}</div>
                        <div>{artist.city}</div>
                        <div>{artist.address}</div>
                    </em>
                </Card.Text>
                <Button as={Link} to={`/singleArtistPage/${artist._id}`} variant="success">Details</Button>

            </Card.Body>
        </Card>
    );
}

export default SingleArtistCard;