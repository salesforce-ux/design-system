export const filterObject = (obj, callback) =>
  Object.fromEntries(
    Object.entries(obj).filter(([key, val]) => callback(key, val))
  );
