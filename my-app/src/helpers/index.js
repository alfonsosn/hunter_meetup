class DateScheduler {
  constructor(){
    this.curr = new Date;
    this.createDays()
  }

  createDays(){
    this.sunday = new Date(this.curr.setDate(this.curr.getDate() - this.curr.getDay())).toDateString();
    this.monday = new Date(this.curr.setDate(this.curr.getDate() - this.curr.getDay()+1)).toDateString();
    this.tuesday = new Date(this.curr.setDate(this.curr.getDate() - this.curr.getDay()+2)).toDateString();
    this.wednesday = new Date(this.curr.setDate(this.curr.getDate() - this.curr.getDay()+3)).toDateString();
    this.thursday = new Date(this.curr.setDate(this.curr.getDate() - this.curr.getDay()+4)).toDateString();
    this.friday = new Date(this.curr.setDate(this.curr.getDate() - this.curr.getDay()+5)).toDateString();
    this.saturday = new Date(this.curr.setDate(this.curr.getDate() - this.curr.getDay()+6)).toDateString();
  }
}

export default{DateScheduler}
