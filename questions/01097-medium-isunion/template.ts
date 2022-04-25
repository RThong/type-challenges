// https://ghaiklor.github.io/type-challenges-solutions/en/medium-isunion.html
// T = 'a'|'b'   第一个条件判断后  T即为 ['a'] | ['b']
// 利用分配条件类型的机制， 并用U在开始的时候保存联合类型供后续使用
type IsUnion<T, U = T> = T extends U ? ([U] extends [T] ? false : true) : false
