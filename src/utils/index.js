function normalizedData(data) {
  let allContetnt;

  data.forEach((item) => {
      const newObj = Object.entries(item).reduce((acc, cur) => {
          const [key, property] = cur;
          if (property === null) {
              return acc;
          }
          return {
              ...acc,
              [key]: property,
          };
      }, {});

      allContetnt = {
          ...allContetnt,
          [newObj.section]: {
              ...newObj,
          },
      };
  });

  return allContetnt;
}

function genreByNumber(data) {
  let map = new Map();
  data.forEach((item) => {
    if (map.get(item.fields.genrefutur)) {
      map.set(item.fields.genrefutur, map.get(item.fields.genrefutur) + 1);
    }
    else map.set(item.fields.genrefutur, 1) 
  });
  return {map,totalGnere:map.size,treesNumber:data.records.length};
}

export {
  normalizedData,
  genreByNumber
};
