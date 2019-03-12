/**
 * 年月をフォーマットする。
 *
 * @param {string} value 'yyyy-MM'フォーマットの年月。
 * @return {string}
 */
export function formatYearMonth(value) {
  if (!value) {
    return null
  }
  const [year, month] = value.split('-')
  return `${year}年${month}月`
}

export default formatYearMonth
