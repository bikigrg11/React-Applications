import characters_json from '../data/characters.json';

export function createCharacter(id){
    // find function to match the character
    let character = characters_json.find(c => c.id === id );
    return character;
}
