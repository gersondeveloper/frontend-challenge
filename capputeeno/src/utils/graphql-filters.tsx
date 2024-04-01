import { FilterType } from "@/context/types/filter-types";
import { PriorityType } from "@/context/types/priority-types";

export function getCategoryByType(type: FilterType) {
  if (type === FilterType.MUG) return "mugs";
  if (type === FilterType.SHIRT) return "t-shirts";
  return "";
}

export function getFieldByPriority(priority: PriorityType) {
  if (priority === PriorityType.MAJOR_PRICE)
    return { field: "price_in_cents", order: "DSC" };
  if (priority === PriorityType.MINOR_PRICE)
    return { field: "price_in_cents", order: "ASC" };
  if (priority === PriorityType.NEWS)
    return { field: "created_at", order: "ASC" };
  return { field: "sales", order: "DSC" };
}

export function mountQuery(type: FilterType, priority: PriorityType) {
  if (type === FilterType.ALL && priority === PriorityType.POPULAR)
    return `query{
    allProducts (sortField: "sales", sortOrder: "DSC"){
      id,
      name,
      price_in_cents,
      image_url
    }
  }`;

  const sortSettings = getFieldByPriority(priority);
  const categoryFilter = getCategoryByType(type);
  const categoryQuery = categoryFilter
    ? `filter: {category: "${categoryFilter}"}`
    : "";

  let query = `
  {
    allProducts(${categoryQuery} , sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}") {
      id
      name
      price_in_cents
      image_url
      category
    }
  }`;
  return query;
}
