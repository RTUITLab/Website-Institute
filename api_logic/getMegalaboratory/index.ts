export default async function getMegalaboratory(title: string) {
  try {
    const response = await fetch('http://localhost:3000/infrastructure/' + title + '/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ megalaboratory: title }),
    });
    return await response.json();
  } catch (e) {
    throw e;
  }
}
