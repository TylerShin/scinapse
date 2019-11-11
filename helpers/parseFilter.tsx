interface Filter {
  minYear?: string;
  maxYear?: string;
  fos?: string[];
  journal?: string[];
}

export const parseFilter = (filterStr?: string | null): Filter => {
  if (!filterStr) return {};

  const filterMap = filterStr.split(',');
  const filters = filterMap.reduce((accm, currentValue) => {
    const filterArr = currentValue.split('=');
    const key = filterArr[0];
    const valueString = filterArr[1];

    if (!valueString) return accm;

    if (key === 'year') {
      const yearArr = valueString.split(':');
      if (yearArr[0]) {
        accm['minYear'] = yearArr[0];
      }
      if (yearArr[1]) {
        accm['maxYear'] = yearArr[1];
      }
    } else {
      const values = filterArr[1].split('|');
      accm[key as 'fos' | 'journal'] = values;
    }
    return accm;
  }, {} as Filter);

  console.log(filters);
  return filters;
};

// console.log(parseFilter('year=:,fos=,journal='));
// console.log(parseFilter('year=2017:2019,fos=33923547|154945302|119857082,journal=2597173376|2597365278'));
// console.log(parseFilter('year=:, fos='));
// console.log(parseFilter(undefined));
// console.log(parseFilter(null));
// console.log(parseFilter(''));
