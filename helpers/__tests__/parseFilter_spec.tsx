import { parseFilter } from '../parseFilter';

describe('parseFilter helper', () => {
  describe('when all filter is empty', () => {
    it('should return empty object', () => {
      expect(parseFilter('year=:,fos=,journal=')).toEqual({});
    });
  });

  describe('when all filter values exist', () => {
    it('should return the parsed object', () => {
      expect(parseFilter('year=2017:2019,fos=33923547|154945302|119857082,journal=2597173376|2597365278')).toEqual({
        minYear: '2017',
        maxYear: '2019',
        fos: ['33923547', '154945302', '119857082'],
        journal: ['2597173376', '2597365278'],
      });
    });
  });
});
