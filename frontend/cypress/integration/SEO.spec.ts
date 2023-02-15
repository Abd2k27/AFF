/// <reference types="cypress" />
import React from 'react'

describe('SEO', () => {
    it('should have correct page title and description for home page', () => {
        cy.visit('http://127.0.0.1:8080')
        
        cy.get('title').contains('Accueil | AFRICA FINTECH FORUM')

        cy.get('meta[name="description"]')
            .should("have.attr", "content", "Africa Fintech Forum is a cross-industry and non profit organization that brings together Fintech players.")
    })
})
