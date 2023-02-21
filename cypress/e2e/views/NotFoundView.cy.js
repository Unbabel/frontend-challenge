describe("NotFoundView", () => {
	beforeEach(() => {
		cy.visit("/no/path");
	});

	it("contains 404 string", () => {
		// Assert
		cy.contains(
			"span",
			"Ah, the dreaded 404. Let's get you back on track."
		);
	});

	it("contains take me home button", () => {
		// Assert
		cy.contains("button", "Take Me Home");
	});

	it("contains accessibility options", () => {
		// Assert
		cy.get('[data-test="accessibility-icon"]').should(
			"have.attr",
			"alt",
			"accessibility-icon"
		);
	});

	it("should be redirected to home page", () => {
		// Act
		cy.contains("button", "Take Me Home").click();

		// Assert
		cy.url().should("eq", "http://localhost:5173/");
	});
});
