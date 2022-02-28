// import React from "react";
//
// function useOnScreen(ref, rootMargin = "0px") {
//     const [isIntersecting, setIntersecting] = React.useState(false);
//
//     React.useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => setIntersecting(entry.isIntersecting),
//             { rootMargin }
//         );
//
//         if (ref.current) {
//             observer.observe(ref.current);
//         }
//         return () => {
//             observer.unobserve(ref.current);
//         };
//     }, []);
//
//     return isIntersecting;
// }
//
// export default useOnScreen;


import { useState, useEffect } from 'react'

export default function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
        if (!ref.current) return

        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting)
        )

        observer.observe(ref.current)
        // Remove the observer as soon as the component is unmounted
        return () => {
            observer.disconnect()
        }
    }, [])

    return isIntersecting
}
