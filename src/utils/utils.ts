/**
 * 检测url链接
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 随机数生成
 * @returns {string}
 */
export function randomNum() {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  const arr = str.split('')
  let result = ''
  for (let i = 0; i < 4; i++) {
    let n = Math.floor(Math.random() * arr.length);
    result += arr[n];
  }
  return result
}

/**
 * 二维数组属性值去重
 * @param {any} arr1
 * @param {string} str
 * @returns {object}
 */
export function unique(arr1: any[], str: string | number) {
  const res = new Map();
  return arr1.filter((a: { [x: string]: any; }) => !res.has(a[str]) && res.set(a[str], 1));
}

/**
 * 时间格式化
 * @param {string} str
 * @returns {string}
 */
export function format(val: string | number | Date) {
  let time = val ? new Date(val) : new Date()
  let year = time.getFullYear()
  let month = time.getMonth() + 1
  let date = time.getDate()
  let hours = time.getHours()
  let minute = time.getMinutes()
  let second = time.getSeconds()
  if (month < 10) { month = '0' + month }
  if (date < 10) { date = '0' + date }
  if (hours < 10) { hours = '0' + hours }
  if (minute < 10) { minute = '0' + minute }
  if (second < 10) { second = '0' + second }
  return year + '-' + month + '-' + date + ' ' + hours + ':' + minute + ':' + second
}
/**
 * 获取当前时间节点
 */
export function timeFix() {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
}

export function welcome() {
  const arr = ['写了这么久代码休息一下吧', '准备吃什么呢?', '要不要打一把 王者荣耀', '我猜你可能累了']
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

/**
 * 通过日期获取周几
 */
export function getWeek() {
  let str = format()
  let value = str.replace(/-/g, '/')
  var weekDay = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  var myDate = new Date(Date.parse(value))
  return weekDay[myDate.getDay()]
}