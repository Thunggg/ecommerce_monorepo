type Variant = {
  value: string
  options: string[]
}

type SKU = {
  value: string
  price: number
  stock: number
  image: string
}

function generateSkus(variants: Variant[]): SKU[] {
  if (variants.length === 0) return []

  const combinations = variants.reduce<string[][]>((acc, variant) => {
    if (acc.length === 0) {
      return variant.options.map((option) => [option])
    }

    return acc.flatMap((combination) => variant.options.map((option) => [...combination, option]))
  }, [])

  return combinations.map((combination) => ({
    value: combination.join('-'),
    price: 0,
    stock: 100,
    image: '',
  }))
}

const data = generateSkus([
  {
    value: 'color',
    options: ['red', 'blue', 'green'],
  },
  {
    value: 'size',
    options: ['S', 'M', 'L'],
  },
])

console.log(JSON.stringify(data, null, 2))
