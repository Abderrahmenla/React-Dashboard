const getDataRequest = () =>
  fetch(
    'https://opendata.paris.fr/api/records/1.0/search/?dataset=budgets-votes-annexes&q=&facet=exercice_comptable&facet=budget&facet=section_budgetaire_i_f&facet=sens_depense_recette&facet=type_d_operation_r_o_i_m&facet=type_du_vote&facet=chapitre_budgetaire_cle&facet=chapitre_budgetaire_texte&facet=nature_budgetaire_cle'
  );

export default getDataRequest;
