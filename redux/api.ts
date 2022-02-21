export async function fetchTrees(): Promise<[]> {
  const response = await fetch('/api/trees')
  const result = await response.json()
  return result.trees
}
