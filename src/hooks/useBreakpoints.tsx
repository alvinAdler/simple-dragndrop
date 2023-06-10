import { useState, useEffect } from 'react'

export type Breakpoints = "sm" | "md" | "lg" | "xl" | "2xl"

const useBreakpoints = () => {

  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoints>(processWidth(window.innerWidth))

  useEffect(() => {
    const breakpointListener = (ev: any) => {
      const currentWidth = ev?.target?.innerWidth
      if(currentWidth){
        setCurrentBreakpoint(processWidth(currentWidth))
      }
    }

    window.addEventListener("resize", breakpointListener)

    return () => {
      window.removeEventListener("resize", breakpointListener)
    }
  }, [])

  function processWidth(width: number){
    if(width >= 1536){
      return "2xl"
    }else if(width >= 1280){
      return "xl"
    }else if(width >= 1024){
      return "lg"
    }else if(width >= 768){
      return "md"
    }
    return "sm"
  }

  return({
    currentBreakpoint
  })
}

export default useBreakpoints