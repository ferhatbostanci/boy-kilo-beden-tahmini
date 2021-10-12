const prompt = require('prompt-sync')();
const csv = require('csv-parser');
const clc = require("cli-color");
const fs = require('fs');

let scores = [];

const peopleHeight = prompt('Boyunuz? ');
const peopleWeight = prompt('Kilonuz? ');

fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (data) => {
        scores.push({
            score: calculateScore(data.height, data.weight),
            index: parseInt(data.index)
        });
    })
    .on('end', () => {
        const peopleScore = calculateScore(peopleHeight, peopleWeight);
        const peopleSize = getSizeByIndex(closestValue(peopleScore));
        // console.log(clc.yellow('Algoritma Skoru: ' + peopleScore));
        console.log(clc.yellow("Beden Tahmini: " + peopleSize));
    });

/**
 * Beden ölçüsü kilo ile doğru ve boy ile ters orantılıdır.
 * Aşağıdaki fonksiyon ile kişinin skorunu hesaplıyoruz.
 */
function calculateScore(height, weight) {
    height = parseFloat(height);
    weight = parseFloat(weight);

    let score = ((height + weight) / height) * weight;

    return parseFloat(score.toFixed(2));
}

/**
 * En yakın değeri bulmaya çalışan fonksiyon.
 */
function closestValue(value) {
    let result, lastDelta;

    scores.forEach((item) => {
        let delta = Math.abs(value - item.score);

        if (delta >= lastDelta) {
            return true;
        }

        result = item.index;
        lastDelta = delta;
    });

    let tolerance = 1 - (lastDelta/value);

    console.log(clc.yellow("Doğruluk Skoru: " + tolerance.toFixed(8)));

    return result;
}

/**
 * Index'e göre bedeni döndürüyor.
 */
function getSizeByIndex(index) {
    const sizeMap = {0: 'XS', 1: 'S', 2: 'M', 3: 'L', 4: 'XL', 5:'XXL'};

    return sizeMap[index];
}
