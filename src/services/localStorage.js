const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return null;
  }
};

const get = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return null;
  }
};

const remove = key => {
  try {
    return localStorage.removeItem(key);
  } catch (error) {
    return null;
  }
};

const STORAGE_KEYS = {
  CONTACTS: 'contacts',
};

export { get, save, remove, STORAGE_KEYS };
