export const pad = (num, size) => {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
 };

 
export function formatDate(date){
    let newDate = date.getFullYear() + "-" + pad(parseInt(date.getMonth() + 1), 2) + "-" + date.getDate();
    return newDate;
}