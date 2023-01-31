declare function SimpleVue<T, U, K>(options: {
  data: () => T
  computed: U & ThisType<T>
  methods: K &
    ThisType<
      {
        [key in keyof U]: U[key] extends (...args: any[]) => unknown
          ? ReturnType<U[key]>
          : never
      } & T &
        K
    >
}): any
