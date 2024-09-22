import FormData from "form-data";

export const uploadFileToAPI = async (file: Buffer, filename: string) => {
  const fetch = (await import("node-fetch")).default;
  const formData = new FormData();
  formData.append("file", file, filename);

  const response = await fetch("http://localhost:4000/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};
