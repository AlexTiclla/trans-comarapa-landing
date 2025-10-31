// ============================================
// CÓDIGO RESPONSIVO COMENTADO PARA FINES DIDÁCTICOS
// Este hook detectaba si el usuario está en un dispositivo móvil
// ============================================

// import * as React from "react"

// const MOBILE_BREAKPOINT = 768

// export function useIsMobile() {
//   const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

//   React.useEffect(() => {
//     const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
//     const onChange = () => {
//       setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
//     }
//     mql.addEventListener("change", onChange)
//     setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
//     return () => mql.removeEventListener("change", onChange)
//   }, [])

//   return !!isMobile
// }

// ============================================
// VERSIÓN NO RESPONSIVA
// Siempre retorna false ya que no necesitamos detectar mobile
// ============================================
export function useIsMobile() {
  return false;
}
