describe("Transcriptions View", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("contains page title", () => {
		// Assert
		cy.contains("span", "Transcriptions");
	});

	describe("starts at the empty state screen", () => {
		it("contains empty state string", () => {
			// Assert
			cy.contains(
				"span",
				"You don't have any transcriptions. Create one!"
			);
		});

		it("contains empty state button", () => {
			// Assert
			cy.contains("button", "Create");
		});

		it("contains accessibility options", () => {
			// Assert
			cy.get('[data-test="accessibility-icon"]').should(
				"have.attr",
				"alt",
				"accessibility-icon"
			);
		});

		it("creates new list item", () => {
			// Act
			cy.contains("button", "Create").click();

			// Assert
			cy.get("textarea")
				.eq(0)
				.should("have.attr", "placeholder", "Insert title...");
			cy.get("textarea")
				.eq(1)
				.should("have.attr", "placeholder", "Insert content...");
		});
	});

	describe("listing page", () => {
		beforeEach(() => {
			cy.visit("/");
			cy.contains("button", "Create").click();
		});

		it("should have two actions available", () => {
			// Act & Assert
			cy.get('[data-test="top-bar-actions"]')
				.children()
				.should("have.length", 2);
		});

		it("loads all items from API", () => {
			// Act
			cy.get('[data-test="top-bar-actions"]').children().eq(1).click(); // get all items
			cy.wait(1000);

			// Assert
			cy.get("textarea").should("have.length", 6);
		});

		it("removes first item of the list", () => {
			// Act
			cy.get('[data-test="top-bar-actions"]').children().eq(1).click(); // get all items
			cy.wait(1000);
			cy.get('[data-test="delete-item-span"]')
				.eq(0)
				.click({ force: true }); // force on hover event
			cy.get('[data-test="delete-item-span"]').eq(0).click(); // remove first item

			// Assert
			cy.get("textarea").should("have.length", 4);
		});

		it("adds one more item to the list", () => {
			// Act
			cy.get('[data-test="top-bar-actions"]').children().eq(1).click(); // get all items
			cy.wait(1000);
			cy.get(".transcriptions-button-div button").click();

			// Assert
			cy.get("textarea").should("have.length", 8);
		});

		it("goes to empty state after removing all list items", () => {
			// Act
			cy.get('[data-test="top-bar-actions"]').children().eq(1).click(); // get all items
			cy.wait(1000);

			for (let i = 0; i < 3; i++) {
				cy.get('[data-test="delete-item-span"]')
					.eq(0)
					.click({ force: true }); // force on hover event
				cy.get('[data-test="delete-item-span"]').eq(0).click(); // remove nth item
			}

			// Assert
			cy.contains(
				"span",
				"You don't have any transcriptions. Create one!"
			);
		});

		describe("accessibility options", () => {
			it("should be able to open and close accessibility options modal", () => {
				// Act
				cy.get('[data-test="accessibility-icon"]')
					.should("have.attr", "alt", "accessibility-icon")
					.click();

				// Assert
				cy.get("#custom-modal").should("have.css", "display", "block");

				// Act
				cy.get("#custom-modal .close").click();

				// Assert
				cy.get("#custom-modal").should("have.css", "display", "none");
			});

			it("should be able to set elder mode", () => {
				// Act
				cy.get('[data-test="accessibility-icon"]')
					.should("have.attr", "alt", "accessibility-icon")
					.click();
				cy.get("#custom-modal .switch").eq(0).click();

				// Assert
				cy.get("html").should("have.css", "font-size", "22px");
			});

			it.only("should be able to set color blindness mode", () => {
				// Act
				cy.get('[data-test="accessibility-icon"]')
					.should("have.attr", "alt", "accessibility-icon")
					.click();
				cy.get("#custom-modal .switch").eq(1).click();

				// Assert
				cy.get(".colorBlindness");
			});
		});
	});
});
