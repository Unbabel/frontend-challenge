// https://docs.cypress.io/api/table-of-contents

const DEFAULT_WAIT_TIME = 2000;

describe("Coding challenege landing page", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.wait(DEFAULT_WAIT_TIME*2);
    cy.contains(".btn-one span", "VIEW");
  });
});

describe("Coding challenege page", () => {
  before(() => {
    // cy.visit('/viewChallenge');
    cy.get(".btn-one").click()
  })
  it("Has app title", () => {
    cy.contains("#app-title", "Transcriptions");
  });

  it("Has button for fetch Button", () => {
    cy.wait(DEFAULT_WAIT_TIME);
    cy
      .get('#fetch-transcriptions')
      .should('be.visible');
  });
  it("Has button for post Button", () => {
    cy.wait(DEFAULT_WAIT_TIME);
    cy
      .get('#post-transcriptions')
      .should('be.visible');
  });
  it("No Items message initially displays", () => {
    cy.wait(DEFAULT_WAIT_TIME);
    cy
      .get('#no-items-message')
      .should('be.visible');
  });
  it("No Items message hidden after fetch is clicked and transcription list display", () => {
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('#fetch-transcriptions').click();
    cy
      .get('#no-items-message')
      .should('not.exist');
    cy
      .get('#transcriptions-list')
      .should('exist');
  });

  it("Add new row to transcriptions", () => {
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('#add-row').click();
    cy.get('.transcriptionRow').last().find(".item-title-input")
      .type("ONE");
    cy.get('.transcriptionRow').last().find(".content-textarea")
      .type("One line sentence");
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('.transcriptionRow').last().find(".content-textarea").trigger('mouseover');
    cy.get('.transcriptionRow').last().find(".edit").click();
  });
  it("Add another new row to transcriptions", () => {
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('#add-row').click();
    cy.get('.transcriptionRow').last().find(".item-title-input")
      .type("Second ONE");
    cy.get('.transcriptionRow').last().find(".content-textarea")
      .type("One line sentence for second row");
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('.transcriptionRow').last().find(".content-textarea").trigger('mouseover');
    cy.get('.transcriptionRow').last().find(".edit").click();
  });

  it("Edit transcriptions row", () => {
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('.transcriptionRow').last().find(".edit").click();
    cy.get('.transcriptionRow').last().find(".item-title-input")
      .type(" edited");
    cy.get('.transcriptionRow').last().find(".content-textarea")
      .type(" edited");
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('.transcriptionRow').last().find(".content-textarea").trigger('mouseover');
    cy.get('.transcriptionRow').last().find(".edit").click();
  });

  it("Search filter working", () => {
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('.transcriptionRow').should('have.length', 6);
    cy.get('.search-component').find("input")
      .type("one");
    cy.wait(DEFAULT_WAIT_TIME * 3);
    cy.get('.transcriptionRow').should('have.length', 2);
  });

  it("Delete row transcription", () => {
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('.transcriptionRow').should('have.length', 2);
    cy.get('.transcriptionRow').first().trigger('mouseover');
    cy.get('.transcriptionRow').first().find(".delete").click();
    cy.wait(DEFAULT_WAIT_TIME * 2);
    cy.get('.transcriptionRow').should('have.length', 1);
  });

  it("Clearing search removes filter and shows the list of transcriptions except the deleted ones", () => {
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get('.transcriptionRow').should('have.length', 1);
    cy.get('.search-component').find("input").focus().clear();
    cy.get('.transcriptionRow').should('have.length', 5);
  });

  it("Checkbox of transcription working", () => {
    cy.wait(DEFAULT_WAIT_TIME);
    cy.get(".transcriptionRow").first()
      .scrollIntoView()
      .within(() => {
        cy.window().then((win) => {
          cy.get("span").should(($el) => {
            const before = win.getComputedStyle($el[0], "::before");
            const beforeContent = before.getPropertyValue("animation");
            expect(beforeContent).to.not.include("cubic-bezier");
            expect(beforeContent).to.not.include("checkbox-check");
          })
        });
      });

    cy.get(".transcriptionRow").first().within(() => {
      cy.get(".customInput span").click();
    })

    cy.get(".transcriptionRow").first()
      .scrollIntoView()
      .within(() => {
        cy.window().then((win) => {
          cy.get("span").then(($el)=>{
            const before = win.getComputedStyle($el[0], "::before");
            const beforeContent = before.getPropertyValue("animation");
            expect(beforeContent).to.include("cubic-bezier");
            expect(beforeContent).to.include("checkbox-check");
          })
        });
      });
  });

});


