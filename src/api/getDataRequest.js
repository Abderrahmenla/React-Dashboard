const getDataRequest = () =>
  fetch(
    'https://opendata.paris.fr/api/records/1.0/search/?dataset=arbres-a-abattre-pour-raison-sanitaires-et-essence-de-remplacement&q=&rows=10000&facet=domanialite&facet=arrondissement&facet=libellefrancais&facet=genre&facet=remarquable&facet=genrefutur'
  );

export default getDataRequest;
