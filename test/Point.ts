import Point from '../src/Point'

describe('Point', () => {
  describe('equal()', () => {
    test('self', () => {
      const point: Point = new Point(0, 0)
      expect(point.equal(point)).toBeTruthy()
    })

    test('null', () => {
      const point: Point = new Point(0, 0)
      expect(!point.equal(undefined)).toBeTruthy()
    })

    test('unequal', () => {
      const lhs: Point = new Point(0, 0)
      const rhs: Point = new Point(1, 1)
      expect(!lhs.equal(rhs)).toBeTruthy()
    })

    test('equal', () => {
      const lhs: Point = new Point(1, 1)
      const rhs: Point = new Point(1, 1)
      expect(lhs.equal(rhs)).toBeTruthy()
    })
  })

  describe('x()', () => {
    test('zero', () => {
      const point: Point = new Point(0, 0)
      expect(point.x()).toBe(0)
    })

    test('nonzero', () => {
      const point: Point = new Point(1, 0)
      expect(point.x()).toBe(1)
    })
  })

  describe('y()', () => {
    test('zero', () => {
      const point: Point = new Point(0, 0)
      expect(point.y()).toBe(0)
    })

    test('nonzero', () => {
      const point: Point = new Point(0, 1)
      expect(point.y()).toBe(1)
    })
  })
})