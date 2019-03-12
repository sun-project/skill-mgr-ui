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
  if (value === '9999-12') {
    return '現在'
  }
  const [year, month] = value.split('-')
  return `${year}年${month}月`
}

export default formatYearMonth
