/**
 * Remove unecessary object keys added by state store.
 * @param {Array[Obj]} listItems
 * @returns {Array[Obj]}
 */
const cleanListItemsObj = (listItems) =>
	listItems.reduce((prev, item) => {
		return [
			...prev,
			{
				id: item.id,
				voice: item.voice,
				text: item.text,
			},
		];
	}, []);

export { cleanListItemsObj };
