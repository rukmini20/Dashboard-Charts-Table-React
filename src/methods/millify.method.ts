import millify from 'millify'
const units = ['', 'k', 'm', 'b', 't', 'p', 'e']

const shortenNumber = (unit: number) => {
  return millify(unit, {
    units,
    space: true,
  })
}

export {shortenNumber}