const uuid = () => Cypress._.random(0, 1e6);

describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Gestion Stock');
    cy.contains('Gérer efficacement votre stock !');

    cy.get('button').contains('Voir le stock');
    cy.get('button').click();

    cy.contains('Liste des articles');

    cy.get('button[title="Ajouter"]').click();

    const id = uuid();

    cy.get('input[formcontrolname="name"]')
      .clear()
      .type(id + ' Faucille');
    cy.get('input[formcontrolname="price"]').clear().type('12.34');
    cy.get('input[formcontrolname="qty"]').clear().type('456');

    cy.get('button').click();

    cy.get('tbody tr:last-child').contains(id);
  });
});
