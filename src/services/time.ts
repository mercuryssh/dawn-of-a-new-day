import { TimeSet, DaySet } from './definitions'

export default class Time {
  private date: Date
  private day: number

  constructor() {
    this.date = new Date()
    this.day = this.date.getDate()
  }

  getSet(): string {
    if (this.date.getHours() < 8) return TimeSet.DAWN
    else if (this.date.getHours() < 20) return TimeSet.NOON
    else return TimeSet.SunSet
  }

  getDay(): string {
    let greeter
    this.day === 15 || this.day === 30 ? greeter = 'The Final' : greeter = 'A New'
    return greeter
  }

  getRemainTime(): number {
    return 24 - this.date.getHours()
  }
}
