export const getExpires = (expire: number) => {
  expire = expire * 1000 + 3900000000; // 날짜 임의 조정

  const today = +new Date();
  const diff = expire - today;

  const currMinute = 60 * 1000;
  const currHour = 60 * currMinute;
  const currDay = 24 * currHour;

  const diffDay = Math.floor(diff / currDay);

  if (diffDay < 0) {
    return `만료됨`;
  } else if (diffDay < 3) {
    const diffMinute = ((diff / currMinute) % 60).toFixed(0);
    const diffHour = Math.floor(diff / currHour);
    return `${diffHour}시간 ${diffMinute}분`;
  } else {
    return `${diffDay}일`;
  }
};
