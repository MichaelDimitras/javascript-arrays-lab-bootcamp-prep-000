const app = "I don't do much."


var kittens = ["Milo", "Otis", "Garfield"];


function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(arr, name){
  kittens.unshift(name);
  return kittens;
}

destructivelyRemoveLastKitten(){
  kittens.pop();
  kittens;
}

