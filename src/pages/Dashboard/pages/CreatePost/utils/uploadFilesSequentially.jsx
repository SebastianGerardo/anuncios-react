import { uploadFile } from "./uploadImage";

export const uploadFilesSequentially = async (type, files) => {
    let filesArr = []

    for (const file of files) {
        const response = await uploadFile(type, file.file);
        filesArr.push(response)
    }

    return filesArr
  };