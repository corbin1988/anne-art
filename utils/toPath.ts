const toPath = (str: string) => {
  return str.replace(/\s+/g, '-').toLowerCase();
}

export default toPath;