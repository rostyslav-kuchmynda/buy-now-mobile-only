export const priceSplitter = (price: string) => price.split(/(\D+)|\./).filter(str => str && str !== '.');
