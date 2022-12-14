import * as Notification from "expo-notifications";

export async function getPushNotificationToken() {
  const { granted } = await Notification.getPermissionsAsync();

  if (!granted) {
    await Notification.requestPermissionsAsync();
  }

  if (granted) {
    const pushToken = await Notification.getExpoPushTokenAsync();
    console.log("PUSH NOTIFICATION TOKEN:", pushToken.data);

    return pushToken.data;
  }
}
