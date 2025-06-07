const formatDate = function (date: Date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const Data = {
  formatDate,
};
