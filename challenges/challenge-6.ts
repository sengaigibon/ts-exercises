export function getRnaComplement(dna: string): string {
    dna = dna.toUpperCase();
    let rnaSequence: string = '';

    for (let i = 0; i < dna.length; i++) {
        switch(dna[i]) {
            case 'G':
                rnaSequence += 'C';
                break;
            case 'C':
                rnaSequence += 'G';
                break;
            case 'T':
                rnaSequence += 'A';
                break;
            case 'A':
                rnaSequence += 'U';
                break;
            default:
                return '';
        }
    }

    return rnaSequence;
}