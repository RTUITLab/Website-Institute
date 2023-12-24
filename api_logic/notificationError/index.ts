type Parametrs = {
  message: string;
  name: string;
};

export default async function NotificationError(error: Parametrs) {
  try {
    const notification = await fetch('http://localhost:8080/notification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(error),
    });
  } catch (e) {
    console.log(error);
    console.log('Данные ошибки не отправлены разработчику');
  }
}
