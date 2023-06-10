export const capitalizeString = (target: string) => {
  if(!target || target.length === 0) return target

  return `${target[0].toUpperCase()}${target.slice(1)}`
}