const firstSymbolToUpperCase = (item: string): string => item.replace(
  /^./,
  symbol => symbol.toUpperCase()
);


export {
  firstSymbolToUpperCase
};
