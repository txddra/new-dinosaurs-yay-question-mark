
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
const truncateSpecies = function(dino){
  
  const dinoObj = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  if (dinoObj.species.length > 10 ){
    dinoObj.species = dinoObj.species.slice(0,7) + "..."
    }else {
  dinoObj.species = dinoObj.species
    }
  return dinoObj
}




const makeExtinct = function() {

}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}