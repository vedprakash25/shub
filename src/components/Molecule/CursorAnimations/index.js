import React, { useState } from 'react'

export default function CursorAnimations() {
    const [pageX, setPageX] = useState();
    const [pageY, setPageY] = useState();

    const cursors= document.addEventListener("mousemove", curserMove)

    const curserMove = () => {
        console.log(cursors)
    }

    return (
        <div>

        </div>
    )
}
