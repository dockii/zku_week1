const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract (Plonk)?Verifier/


let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment

// I could have moved 'HelloWorldVerifier' here as well.
// Not doing it for my changes to be more 'visible'
const verifierContractNames = ["Multiplier3Verifier", "Multiplier3Verifier_plonk"]

for (const contractName of verifierContractNames) {
    const contractFile = `./contracts/${contractName}.sol`
    let content = fs.readFileSync(contractFile, { encoding: 'utf-8' });
    let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
    bumped = bumped.replace(verifierRegex, `contract ${contractName}`);

    fs.writeFileSync(contractFile, bumped);
}