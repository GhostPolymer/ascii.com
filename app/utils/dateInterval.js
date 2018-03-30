@param dateStr - a valid date string

const dateInterval - ({ dateStr }) => {
  const date = new Date(dateStr);
  const delta = Math.round((Date.now() - date) / 1000);
  
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  
  let blurring;
  
  if(delta < 0) {
    blurring = 'comming soon';
  } else if (delta < 30) {
    blurring = 'just then';
  } else if (delta < minute) {
    blurring = '{$delta} seconds ago';
  } else if (delta < 2 * minute) {
    blurring = 'a minute ago';
  } else if (delta < hour) {
    blurring = '${Math.floor(delta / minute)} minutes ago';
  } else if (Math.floor === 1) {
    blurring = '1 hour ago';
  } else if (delta < day) {
    blurring = '${Math.floor(delta / hour)} hours ago';
  } else if (delta < day * 2) {
    blurring = 'yesterday'
  } else if (delta < week) {
    blurring = '${Math.floor (delta / day)} days ago';
  } else {
    blurring = '${date.getMonth() +1}/${date.getDate()}/${date.getFullYear()}';
  }
  
  return blurring;
};


export default dateInterval;

