
const makeDino = function(species, period, diet, status = false){
  const madeDino = {
    species: species,
    period: period,
    carnivore: diet,
    extinct: status,
  };
  return madeDino;

};

const makeSingular = function(obj){
  const madeDinoObj = {
  species: obj.species,
  period: obj.period,
  carnivore: obj.carnivore,
  extinct: obj.extinct,
};
if(madeDinoObj.species.endsWith('us')){
  madeDinoObj.species = madeDinoObj.species.slice(0,madeDinoObj.species.length-2)
}else {
  madeDinoObj.species = madeDinoObj.species}
return madeDinoObj;

}


const truncateSpecies = function() {
}

const makeExtinct = function() {

}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}