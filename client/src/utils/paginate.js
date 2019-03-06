//pagination function
export default function paginate(items, activePageNumber, pageSize) {
  const startIndex = (activePageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  let pageList = items.slice(startIndex, endIndex);
  return pageList;
}
