class DateScheduler {
  constructor(){
    this.curr = new Date;
    this.createDays()
  }

  createDays(){
    this.first = this.curr.getDate() - this.curr.getDay() + 1;
    this.monday = new Date(this.curr.setDate(this.first)).toDateString();
    this.tuesday = new Date(this.curr.setDate(this.first + 1)).toDateString();
    this.wednesday = new Date(this.curr.setDate(this.first + 2)).toDateString();
    this.thursday = new Date(this.curr.setDate(this.first + 3)).toDateString();
    this.friday = new Date(this.curr.setDate(this.first + 4)).toDateString();
  }
}

export default{DateScheduler}
