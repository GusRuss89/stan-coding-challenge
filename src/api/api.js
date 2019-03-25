export const getTitles = async () => {
  const res = await fetch('/sample.json')
  if (!res.ok) throw new Error('Response not ok')
  const json = await res.json()
  return json.entries
}
