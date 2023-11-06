export const amountDataArray = []

const amountDataGenerator = () => {
  const totalAmountData = 99

  for (let i = 1; i <= totalAmountData; i++) {
    const id = i
    const amountInt = 100 + id * 100
    const amount = `${amountInt.toString()}€`
    amountDataArray.push({ id, amount })
  }
}

amountDataGenerator()

export const durationDataArray = [
  { id: 1, duration: '6 months' },
  { id: 2, duration: '12 months' },
  { id: 3, duration: '18 months' },
  { id: 4, duration: '24 months' },
  { id: 5, duration: '30 months' },
  { id: 6, duration: '36 months' },
  { id: 7, duration: '42 months' },
  { id: 8, duration: '48 months' },
  { id: 9, duration: '54 months' },
]

export const countyOptions = [
  { value: null, text: 'County' },
  { value: 'Harju', text: 'Harju' },
  { value: 'Ida-Viru', text: 'Ida-Viru' },
  { value: 'Tartu', text: 'Tartu' },
]

export const cityOptions = [
  { value: null, text: 'City / Parish' },
  { value: 'Rakvere', text: 'Rakvere' },
  { value: 'Tallinn', text: 'Tallinn' },
  { value: 'Narva', text: 'Narva' },
]

export const townshipOptions = [
  { value: null, text: 'Township / Village' },
  { value: 'Alansi', text: 'Alansi' },
  { value: 'Haapse', text: 'Haapse' },
  { value: 'Kobru', text: 'Kobru' },
]

export const relationshipOptions = [
  { value: null, text: 'Relationship to the PEP' },
  { value: 'Brother', text: 'Brother' },
  { value: 'Sister', text: 'Sister' },
  { value: 'Mother', text: 'Mother' },
  { value: 'Father', text: 'Father' },
]

export const regionOptions = [
  { value: null, text: 'PEP region' },
  { value: 'Võru', text: 'Võru' },
  { value: 'Viljandi', text: 'Viljandi' },
  { value: 'Saare', text: 'Saare' },
  { value: 'Rapla', text: 'Rapla' },
]

export const positionOptions = [
  { value: null, text: 'PEP position' },
  { value: 'Employed', text: 'Employed' },
  { value: 'Unemployed', text: 'Unemployed' },
]

export const durationOptions = [
  { value: null, text: 'Duration as PEP or related to a PEP' },
  { value: 'Employed', text: '1-6 months' },
  { value: 'Unemployed', text: '6-12 months' },
  { value: 'Unemployed', text: 'more than 12 months' },
]
