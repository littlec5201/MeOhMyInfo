import * as R from "ramda";

export function map(callback, target) {
  const mapIndexed = R.addIndex(R.map);
  return mapIndexed(callback, target);
}
