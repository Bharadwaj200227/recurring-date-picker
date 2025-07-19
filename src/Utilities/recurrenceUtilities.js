export let generateRecurringDates = (start, end, frequency, custom) => {
  if (!start || !end ||new Date(start) > new Date(end)) return [];

  let dates = [];
  let startDate = new Date(start);
  let endDate = new Date(end);
  let current = new Date(startDate);

  while (current <= endDate) {
    let yyyy = current.getFullYear();
    let mm = String(current.getMonth() + 1).padStart(2, '0');
    let dd = String(current.getDate()).padStart(2, '0');
    let formatted = `${yyyy}-${mm}-${dd}`;

    let includeDate = false;

    if (frequency === 'daily') {
      includeDate = true;
    } else if (frequency === 'weekly' && custom?.weekday) {
      let dayName = current.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
      includeDate = dayName === custom.weekday.toLowerCase();
    } else if (frequency === 'monthly' && custom.day) {
      includeDate = current.getDate() === Number(custom.day);
    } else if (frequency === 'yearly') {
      includeDate = true;
    }

    if (includeDate) {
      dates.push(formatted);
    }

    current.setDate(current.getDate() + 1);
  }

  return dates;
};

