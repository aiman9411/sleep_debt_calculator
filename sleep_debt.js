const getSleepHours = day => {
    if (day === "saturday" || day === "sunday") {
      return 8;
    } else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
      return 9;
    }
  }
  
  const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7
  }
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log('You get enough sleep,');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You sleep more hours than you need.');
    } else {
      console.log('You need more sleep.');
    }
  
    if (actualSleepHours < idealSleepHours) {
      console.log('You should sleep ' + (idealSleepHours - actualSleepHours) + ' hours more.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You should sleep ' + (actualSleepHours - idealSleepHours) + ' hours less.');
    } else {
      console.log('You are doing fine.')
    }
  }
  
  calculateSleepDebt()