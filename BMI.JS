const button = document.querySelector('button');
let analyysi = document.querySelector('.analysis');
let result = document.querySelector('.bmi-score');
let w = document.getElementById('weight')
let h = document.getElementById('height')


function bmicalc(evt){
  let score = (w.value / ((h.value * h.value)/10000)).toFixed(1);
  result.innerHTML = score;
  reset()

  if (score < 19) {
    analyysi.innerHTML = alipaino;
    document.querySelector('.bmi0-19').style.color = 'orange';
  } else if (score > 25) {
    analyysi.innerHTML = ylipaino;
    document.querySelector('.bmi25-30').style.color = 'orange';
  } else {
    analyysi.innerHTML = normaali;
    document.querySelector('.bmi19-25').style.color = 'orange';
}
}

function reset(evt) {
  document.querySelector('.bmi0-19',).style.color = 'black';
  document.querySelector('.bmi19-25',).style.color = 'black';
  document.querySelector('.bmi25-30',).style.color = 'black';
}

button.addEventListener('click', bmicalc);

const alipaino = 'Jos painoindeksi on alle 18,5, se merkitsee liiallista laihuutta. Sen syynä voi olla jokin pitkällinen sairaus tai laihuushäiriö eli anoreksia. Jos varsinaista sairautta ei ole, mutta painoindeksi on laskenut alle 18,5:n, pitää hakeutua lääkäriin. Jos paino muutamassa kuukaudessa on laskenut yli 20:n tasolta reilusti, on varminta mennä lääkäriin jo painoindeksin lähestyessä 19:ää. Painonindeksin arvo 17 tai sen alle merkitsee vaarallista aliravitsemusta, jolloin on heti hakeuduttava hoitoon.'

const normaali = 'Normaaliksi on valittu se painoindeksin alue, jossa ihmisen terveys on parhaimmillaan. Normaali painoindeksin alue on välillä 18,5–25. Jos painoindeksi on pienempi kuin 18,5 tai suurempi kuin 25, sairauksien vaara suurenee. Painoindeksiä voidaan käyttää 18 vuoden iästä lähtien.'

const ylipaino = 'Kun painoindeksi ylittää 25, ollaan liikapainon puolella. Liikakilojen määrä voi vaihdella erittäin paljon, muutamasta kilosta moniin kymmeniin kiloihin. Siksi on hyödyllistä täsmentää, kuinka suuresta ylipainosta on kyse. Painoindeksin perusteella lihavuus luokitellaan vaikeusasteisiin seuraavasti: 25–30: ylipaino eli lievä lihavuus, 30–35: merkittävä lihavuus, 35–40: vaikea lihavuus\Yli 40: sairaalloinen lihavuus.'