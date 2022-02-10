const useTime = () => {
  const zeroPadding = (num: number, len: number) => {
    return (Array(len).join("0") + num).slice(-len);
  };
  const getTimeToHM = (minutes: number) => {
    const hour = Math.floor(minutes / 60);
    const min = minutes % 60;

    return `${hour}:${zeroPadding(min, 2)}`;
  };
  return { getTimeToHM };
};

export default useTime;
