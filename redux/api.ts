export async function fetchTrees(): Promise<[]> {
  const response = await fetch('/api/trees')
  const result = await response.json()
  return result.trees
}

export async function fetchOrchards(): Promise<[]> {
  const response = await fetch('/api/orchards')
  const result = await response.json()
  return result.orchards
}
