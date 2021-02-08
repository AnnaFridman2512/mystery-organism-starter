// Returns a random DNA base A or T or C or G
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//organism object
let pAequorFactory = (number, dna) => {
  return {
    specimenNum: number,
    dna: dna,
    mutate() {
      //mutates the DNA
      let randomNum = Math.floor(Math.random() * 15); //random index
      let currentDnaBase = returnRandBase(); //rendom base
      if (this.dna[randomNum] === currentDnaBase) {
        //if they're the same don't change
        return this.dna;
      } //if they are different- change
      this.dna[randomNum] = currentDnaBase;
    },

    compareDNA(pAequorObject) {
      //compares DNA arrays and returns the similarity in %
      let count = 0; //number of identical bases
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequorObject.dna[i]) {
          count++;
        }
      }
      let total = ((count / this.dna.length) * 100).toFixed(0);
      return ` ${this.specimenNum} and ${pAequorObject.specimenNum} have ${total}% of DNA in common`;
    },

    willLikelySurvive() {
      //checks survivel - if above60% C or D - survives
      let countgANDc = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "D") {
          countgANDc++;
        }
      }
      if ((countgANDc / this.dna.length) * 100 >= 60) {
        return true;
      } else {
        return false;
      }
    },
  };
};

//cheking if mutate()works:
let randomDna1 = [
  "G",
  "G",
  "G",
  "C",
  "T",
  "G",
  "A",
  "A",
  "C",
  "G",
  "T",
  "A",
  "A",
  "T",
  "A",
];
let pAequor1 = pAequorFactory(1, randomDna1);
//console.log(pAequor1.dna);
//pAequor1.mutate();
//console.log(pAequor);
//___________________________________
//cheking if compareDNA() works:
let randomDna2 = [
  "C",
  "C",
  "C",
  "D",
  "D",
  "D",
  "A",
  "D",
  "D",
  "D",
  "D",
  "D",
  "A",
  "T",
  "A",
];
let pAequor2 = pAequorFactory(2, randomDna2);
//console.log(pAequor2);
//console.log(pAequor1.compareDNA(pAequor2));
//_________________________________
//cheking if willLikelySurvive() works:
console.log(pAequor1.willLikelySurvive()); //returns false
console.log(pAequor2.willLikelySurvive()); //returns true
