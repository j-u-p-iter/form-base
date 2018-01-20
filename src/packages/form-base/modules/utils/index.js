// common
const firstSymbolToUpperCase = (item: string): string => item.replace(
  /^./,
  symbol => symbol.toUpperCase()
);


export {
  firstSymbolToUpperCase
};


// Styles
export const elementsSequence = (value=0, direction='bottom') => {
  return direction === 'bottom' ? `
    margin: 0 0 ${value};
    &:last-child { margin-bottom: 0; }
  ` : `
    margin: ${value} 0 0;
    &:first-child { margin-top: 0; }
  `;
};
