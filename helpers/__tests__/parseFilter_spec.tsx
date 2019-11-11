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

  describe('when only one year filter exists', () => {
    it('should return the parsed object only has minYear', () => {
      expect(parseFilter('year=2017:,fos=33923547|154945302|119857082,journal=2597173376|2597365278')).toEqual({
        minYear: '2017',
        fos: ['33923547', '154945302', '119857082'],
        journal: ['2597173376', '2597365278'],
      });
    });

    it('should return the parsed object only has maxYear', () => {
      expect(parseFilter('year=:2019,fos=33923547|154945302|119857082,journal=2597173376|2597365278')).toEqual({
        maxYear: '2019',
        fos: ['33923547', '154945302', '119857082'],
        journal: ['2597173376', '2597365278'],
      });
    });
  });

  describe('when undefined is given', () => {
    it('should return empty object', () => {
      expect(parseFilter(undefined)).toEqual({});
    });
  });

  describe('when null is given', () => {
    it('should return empty object', () => {
      expect(parseFilter(null)).toEqual({});
    });
  });

  describe('when empty string is given', () => {
    it('should return empty object', () => {
      expect(parseFilter('')).toEqual({});
    });
  });
});
