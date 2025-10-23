export const groupDatesByMonth = (dates) => {
  return dates.reduce((acc, current) => {
    const month = current.date.split(" ")[0];

    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(current);
    return acc;
  }, {});
};
