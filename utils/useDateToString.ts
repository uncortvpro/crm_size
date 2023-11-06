export function useFormatDate(date: Date) {
    console.log(typeof date);
    
  return typeof date === 'string' ? date : date.toDateString();
}
  