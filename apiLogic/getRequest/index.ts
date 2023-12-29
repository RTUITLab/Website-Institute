export default async function getRequest(url: string) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    throw e;
  }
}
