async function sourceToArrayBuffer(imageSrc: string) {
  const response = await fetch(imageSrc);
  const blob = await response.blob();

  return new Promise(resolve => {
    const reader = new FileReader();

    reader.onloadend = () => resolve(reader.result);

    reader.readAsArrayBuffer(blob);
  });
}

export { sourceToArrayBuffer };
