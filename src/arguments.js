function storeArgument(i, t) {
  const args = [i, t];
  localStorage.setItem(`${i}-${t}`, JSON.stringify(args));
}

module.exports = { storeArgument }
