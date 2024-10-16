import { defineStore } from 'pinia'

interface ICounterState {
  counter: number
}

export const useCounterStore = defineStore('counter', {
  state: (): ICounterState => ({
    counter: 1
  })
})
