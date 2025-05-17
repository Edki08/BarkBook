import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveLog = async (key, newEntry) => {
  try {
    const existing = await AsyncStorage.getItem(key);
    const logs = existing ? JSON.parse(existing) : [];
    logs.push(newEntry);
    await AsyncStorage.setItem(key, JSON.stringify(logs));
  } catch (error) {
    console.error("Failed to save log:", error);
  }
};

export const getLogs = async (key) => {
  try {
    const logs = await AsyncStorage.getItem(key);
    return logs ? JSON.parse(logs) : [];
  } catch (error) {
    console.error("Failed to load logs:", error);
    return [];
  }
};
