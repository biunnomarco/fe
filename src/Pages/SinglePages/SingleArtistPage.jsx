import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getArtistById } from '../../Store/artistSlice'

const SingleArtistPage = () => {
  const {id} = useParams()

  const dispatch = useDispatch()
  const artist = useSelector(state => state.artists.artistById)
  console.log(artist)

  useEffect(() => {
    dispatch(getArtistById(id))
  }, [])

  return (
    <div>
      {artist && (
        <div>{artist.name}</div>
      )}
    </div>
  )
}

export default SingleArtistPage