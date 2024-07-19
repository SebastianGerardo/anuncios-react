export const deleteFile = (data, id) => {
  const newFiles = data.filter((obj) => obj.id !== id);

  return newFiles;
};
