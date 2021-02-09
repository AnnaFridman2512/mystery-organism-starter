#Project Goals
Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents.
Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases.
The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P.
aequor an interesting specimen to study.
However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive.
Your job is to create objects that simulate the DNA of P. aequor for your research team to study.

###returnRandBase()
When it's called it will randomly select a base and return the base ('A','T','C', or 'G').

###mockUpStrand()
Is used to generate an array containing 15 bases to represent a single DNA strand with 15 bases.

###pAequorFactory()
Returns an object that contains the properties specimenNum and dna that correspond to the parameters provided.

###mutate()
Is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base.
Then .mutate() will return the object’s dna.

###compareDNA()
Compare the current pAequor‘s .dna with the passed in pAequor‘s .
dna and compute how many bases are identical and in the same locations.
.compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common.

###willLikelySurvive()
Returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.

