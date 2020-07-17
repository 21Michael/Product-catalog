 class time {
     constructor(date) {
         this._passedDate = new Date(date)
         this._currentDate = new Date()
     }
     durationDays() {
         return this._passedDate = Math.ceil((this._passedDate - this._currentDate) / (1000 * 60 * 60 * 24));

     }
     addDays(days) {
         return new Date(this._passedDate = this._currentDate.setDate(this._currentDate.getDate() + days));

     }
 }

 export default function Time(date) {
     return new time(date);
 }