export const imageUpload = async (imageData: File): Promise<string | null> => {
  const formData = new FormData();
  formData.append("image", imageData);

  const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
  if (!apiKey) {
    console.error("ImgBB API key is missing!");
    return null;
  }

  const res = await fetch(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) {
    console.error("Image upload failed");
    return null;
  }

  const data: {
    data?: { display_url?: string };
    success?: boolean;
  } = await res.json();

//   console.log("imgbb response:", data);

  return data?.data?.display_url ?? null;
};
