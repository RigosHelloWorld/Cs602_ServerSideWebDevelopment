class DailyGreeting {
  private GOOD_MORNING = 'Good Morning';
  private GOOD_EVENING = 'Good Evening';
  private GOOD_AFTERNOON = 'Good Afternoon';
  constructor() {}

  public getGreeting() {
    //Based off the local time zone hours are inclusive: 0-23 
    const hour = new Date().getHours();

    if (hour > 0 && hour < 12) {
      console.log(`Your daily greeting: ${this.GOOD_MORNING}`);
    } else if (hour >= 12 && hour < 18) {
      console.log(`Your daily greeting: ${this.GOOD_AFTERNOON}`);
    } else {
      console.log(`Your daily greeting: ${this.GOOD_EVENING}`);
    }
  }
}

new DailyGreeting().getGreeting();
