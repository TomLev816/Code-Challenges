var cats = [];

function flipHat(cat){
  if (cat == 'no hat'){
    return cat = 'hat';
  }else{
    return cat = 'no hat'
  }
}

for (let x = 1; x < 101; x++){
  for (let i = 1; i < 101; i++){
    if (i % x == 0){
      cats[i] = flipHat(cats[i])
    }
  }
}

console.log (cats)

counter = 1
cats.forEach(cat => {
  if (cat == 'no hat') {
    console.log(counter)
  }
  counter++
})