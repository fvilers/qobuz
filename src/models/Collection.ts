interface Collection<T> {
  offset: number;
  limit: number;
  total: number;
  items: T[];
}

export default Collection;
