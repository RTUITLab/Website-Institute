export default async function getMegalaboratory(title: string) {
  try {
    const response = await fetch('http://localhost:3000/infrastructure/api/' + title);
    return await response.json();
  } catch (e) {
    throw e;
  }
}
