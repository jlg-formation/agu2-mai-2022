describe('My Delete Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');

    cy.get('button').contains('Voir le stock');
    cy.get('button').click();

    cy.contains('Liste des articles');

    cy.get('tbody')
      .children()
      .each((elt) => {
        elt.trigger('click');
      });

    cy.get('button[title="Supprimer"]').click();
  });
});
