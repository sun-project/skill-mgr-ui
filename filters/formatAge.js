/**
 * 年齢をフォーマットする。
 *
 * @param {number} value 年齢。
 * @return {string}
 */
export function formatAge(value) {
  if (value == null) {
    return null
  }
  return `${value}歳`
}

export default formatAge
