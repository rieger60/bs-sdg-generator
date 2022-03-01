function process(){
  var textfield = document.getElementById('bullshit');
  textfield.value = buzzword();
}

function randomarray(a) {
  var i;
  for (i=a.length;i--;) {
    var j = Math.floor((i+1)*Math.random());
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
return a;
}

function buzzword() {

var adverbs = new Array (
  "proaktiv","motiverende","begejstrende","entusiastisk","holistisk","engagerende","unik","berigende"
  )

var verbs = new Array (
  "samskabelse af","levendegørelse af","realisering af","udvikling af","koordinering af","facilitering af"
);

var adjectives = new Array (
  "bæredygtige","ambitiøse","tværfaglige","visionære"
);

var nouns = new Array (
  "initiativer","indsatser","SDG-grupper","synergier","workshops","sparringsmuligheder","dagsordener","tematikker","muligheder"
);

     adjectives = randomarray(adjectives);
     nouns = randomarray(nouns);
     adverbs = randomarray(adverbs);
     verbs = randomarray(verbs);

     var x;

     var statement = adverbs[adverbs.length-1];
     adverbs.length -= 1;
     statement = statement + " " + verbs[verbs.length-1];
     verbs.length -= 1;
     statement = statement + " " + adjectives[adjectives.length-1];
     adjectives.length -= 1;
     statement = statement + " " + nouns[nouns.length-1];
     nouns.length -= 1;

     return statement;
}