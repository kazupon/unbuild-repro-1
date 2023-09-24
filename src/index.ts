export function add (a: number, b: number): number {
  return a + b
}

if (import.meta.vitest) {
    const { test, expect } = import.meta.vitest

    test('add', () => {
        expect(add(1, 2)).toBe(3)
    })
}
