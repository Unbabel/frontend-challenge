import { describe, it, expect, beforeEach, vi } from "vitest";

import { addOrRemoveClassNameFromElTag } from "../accessibilityOptions";

describe("accessibilityOptions", () => {
	describe("addOrRemoveClassNameFromElTag", () => {
		it("adds new class", () => {
			// Arrange
			const div = document.createElement("div");
			document.body.appendChild(div);

			// Act
			addOrRemoveClassNameFromElTag("div", "test-class");

			// Assert
			const classNames = Array.from(div.classList);
			expect(classNames).toHaveLength(1);
		});

		it("removes existing class", () => {
			// Arrange
			const div = document.createElement("div");
			document.body.appendChild(div);

			// Act
			addOrRemoveClassNameFromElTag("div", "test-class"); // add class
			addOrRemoveClassNameFromElTag("div", "test-class"); // remvove class

			// Assert
			const classNames = Array.from(div.classList);
			expect(classNames).toHaveLength(0);
		});
	});
});
