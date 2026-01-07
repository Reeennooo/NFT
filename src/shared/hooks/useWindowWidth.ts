import {useEffect, useState} from 'react';

export function useWindowWidth(): number {
  const getWidth = () =>
    typeof window !== 'undefined' ? window.innerWidth : 0

  const [width, setWidth] = useState<number>(getWidth)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}