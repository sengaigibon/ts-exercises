export function getRnaComplement(dna: string): string {
    if (dna.length > 4 || dna.length < 4) {
        return '';
    }

    dna = dna.toUpperCase();
    let rnaSequence: string = '';

    for (let i = 0; i < 4; i++) {
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