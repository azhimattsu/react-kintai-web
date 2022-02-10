type Week = "日" | "月" | "火" | "水" | "木" | "金" | "土";
const WEEKS: Array<Week> = ["日", "月", "火", "水", "木", "金", "土"];

const useWeekDay = () => {
  const getString = (weekDay: number) => {
    return WEEKS[weekDay];
  };
  const getStringByYmd = (ymd: string) => {
    const year = ymd.slice(0, 4);
    const month = ymd.slice(4, 6);
    const day = ymd.slice(6, 8);
    const date = new Date(
      parseInt(year, 10),
      parseInt(month, 10) - 1,
      parseInt(day, 10)
    );
    //    console.log(date);
    return getString(date.getDay());
  };

  return { getString, getStringByYmd };
};

export default useWeekDay;
