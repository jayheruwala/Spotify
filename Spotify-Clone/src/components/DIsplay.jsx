import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlum from './DisplayAlbum'
// import { albumsData } from '../assets/assets'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const DIsplay = () => {

    const { albumsData } = useContext(PlayerContext);
    const dsiplayRef = useRef();
    const location = useLocation();


    const isAlbum = location.pathname.includes("album");
    const albumId = isAlbum ? location.pathname.split('/').pop() : "";


    const bgColor = isAlbum && albumsData.length > 0 ? albumsData.find((x) => (x._id == albumId)).bgColour : "#121221"

    useEffect(() => {
        if (isAlbum) {
            dsiplayRef.current.style.background = `linear-gradient(${bgColor},#121212)`
        } else {
            dsiplayRef.current.style.background = `#121212`
        }
    })

    return (
        <div ref={dsiplayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
            {
                albumsData.length > 0
                    ?
                    <Routes>
                        <Route path='/' element={<DisplayHome />} />
                        <Route path='/album/:id' element={<DisplayAlum album={albumsData.find((x) => (x._id == albumId))} />} />
                    </Routes>
                    :
                    null
            }

        </div>
    )
}

export default DIsplay