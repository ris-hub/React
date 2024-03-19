//filtering data for search text -> for example if KFC is search then we will filter out KFC from the resutaurantList if present and return it
export function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterData;
}