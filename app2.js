//project plan:
//messages must be randomly generated
//file should be saved as script.js format; application should be run on node.js in local machine for testing
//file should be added into git repository using command: git init my_message_generator
//messages need to be stored in an array; nesting arrays in an object is an optimal suggestion
//...

const randNum = num => {
    return Math.floor(Math.random() * num);
};

const faction = {
    imperiumOfMan: ['Astartes Mechanicus', 'Astartes Custodes', 'Space Marines', 'Grey Knights', 'Astra Militarum', 'Imperial Knights'],
    forcesOfChaos: ['Chaos Space Marines', 'Death Guard', 'World Eaters', 'Thousand Sons', 'Chaos Daemons', 'Chaos Knights'],
    spaceElves: ['Aeldari', 'Drukhari'],
    monsters: ['Tyranids', 'Genestealer Cults'],
    elites: ['T-au empire', 'Leagues of Votann']
};

let rite_of_passage = [];

for(let prop in faction) {
    let choiceIndex = randNum(faction[prop].length);
    switch(prop) {
        case 'imperiumOfMan':
            rite_of_passage.push(`By the will of His Holiness of the Imperium of Man, and your incredible performance in the frontlines, you have been enlisted into the ranks of the ${faction[prop][choiceIndex]}, soldier!`);
            break;
        case 'forcesOfChaos':
            rite_of_passage.push(`Your mission is to infiltrate into and destroy a planetary armory outpost of ${faction[prop][choiceIndex]}.`);
            break;
        case 'spaceElves':
            rite_of_passage.push(`Be wary of coming across the ${faction[prop][choiceIndex]} on the way. You may choose to ally with them if your goals align momentarily\n but make sure to cut your losses and ONLY PROTECT YOUR BROTHERS IN ARMS!`);
            break;
        case 'monsters':
            rite_of_passage.push(`The enemy has brokered a momentary truce with ${faction[prop][choiceIndex]} to act as their vanguard. Eliminate them with extreme prejudice!`);
            break;
        case 'elites':
            rite_of_passage.push(`The ${faction[prop][choiceIndex]} have offered to aid us in battle with regard to this mission since they have have personal vendetta against the enemy and their allies.\n This works in our favor. Learn from them, and bring glory to the empire!`);
            break;
        default:
            rite_of_passage.push('You are yet to be initiated, soldier.');
    }
}

function restructurePrompt(prompt) {
    const restructured = rite_of_passage.join('\n');
    console.log(restructured);
}

restructurePrompt(rite_of_passage);
