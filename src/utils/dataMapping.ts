interface DataItemWithKey {
  key: string;
}

interface Result<T> {
  [key: string]: DataItemWithKey & T;
}

export const mapDataToKeys = <T>(arr: (DataItemWithKey & T)[]): Result<T> => {
  return arr.reduce((acc, column) => {
    return { ...acc, [column.key]: column };
  }, {});
};
