export default class Point {
  private readonly _x: number
  private readonly _y: number

  constructor(x: number, y: number) {
    this._x = x
    this._y = y
  }

  get x(): number { return this._x }

  get y(): number { return this._y }

  equal(rhs?: Point): boolean {
    return !!rhs && this.x === rhs.x && this.y === rhs.y
  }

  toString(): string { return `(${this.x} ${this.y})` }
}