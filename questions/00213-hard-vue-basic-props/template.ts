/**
 * infer R：描述类型的某一部分的‘类型’, 可以理解成类型占位，通过extends匹配，如果成功就取出对应部分
 * 可以作为泛型使用
 *
 * example:
 * 1. 取字符串的一部分：
 * T extends `${infer L}${infer R}`
 *
 * 2. 取函数的一部分，提前定义函数结构，将infer R作为泛型传入：
 * type Fn<T> = () => T
 * U extends Fn<infer R> ? R : never
 */

type InferComputed<C extends Record<string, any>> = { [K in keyof C]: ReturnType<C[K]> }

type Prop<T = any> = PropType<T> | { type?: PropType<T> }
type PropType<T> = PropConstructor<T> | PropConstructor<T>[]

type PropConstructor<T = any> =
  | (new (...args: any[]) => T & object)
  | (() => T)

type InferPropType<P> =
  P extends Prop<infer T>
    ? unknown extends T
      ? any
      : T
    : any

type InferProps<P extends Record<string, any>> =
  { [K in keyof P]: InferPropType<P[K]> }

declare function VueBasicProps<P, D, C extends Record<string, any>, M, Props = InferProps<P>>(
  options: {
    props?: P
    data(this: Props): D
    computed: C & ThisType<Props & D & InferComputed<C> & M>
    methods: M & ThisType<Props & D & InferComputed<C> & M>
  }
): Props & D & InferComputed<C> & M

type AAA<T extends string> = () => T

type BBB<T> = T extends AAA<infer R> ? R: 1

type CCC = BBB<() => '123'>

type O = StringConstructor extends
(() => (infer R & object)) ? R : never
