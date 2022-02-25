export const getFileSize = (fileSize: number) => {
  const b = fileSize;
  const kb = (Number(b) / 1000).toFixed(2);
  const mb = (Number(kb) / 1000).toFixed(2);
  const gb = (Number(mb) / 1000).toFixed(2);
  const tb = (Number(gb) / 1000).toFixed(2);
  if (Number(tb) >= 1) return `${tb}TB`;
  else if (Number(gb) >= 1) return `${gb}GB`;
  else if (Number(mb) >= 1) return `${mb}MB`;
  else if (Number(kb) >= 1) return `${kb}KB`;
  else return `${b}B`;
};
