const addOrRemoveClassNameFromElTag = (elTag, className) => {
	const [el] = document.getElementsByTagName(elTag);

	if (el) {
		const classNames = Array.from(el.classList);

		if (classNames.includes(className)) {
			el.classList.remove(className);
		} else {
			el.classList.add(className);
		}
	}
};

export { addOrRemoveClassNameFromElTag };
