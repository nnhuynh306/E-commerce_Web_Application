const controller = {}
const Op = require('sequelize').Op;
const models = require('../models')

var capitalize = function capitalizeTheFirstLetterOfEachWord(words) {
    var separateWord = words.toLowerCase().split(' ');
   for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
      separateWord[i].substring(1);
   }
   return separateWord.join(' ');
};


controller.findProduct = (text) => {
    text = String(text);
    let upcase = capitalize(text);
    upcase = "%" + upcase + "%"; 
    text = '%' + text + '%';
    return models.Product.findAll({
        where: {
            [Op.or]: [
                {
                    name: {
                        [Op.like]: text
                    }
                },
                {
                    brand: {
                        [Op.like]: text
                    }
                },
                {
                    name: {
                        [Op.like]: upcase
                    }
                },
                {
                    brand: {
                        [Op.like]: upcase
                    }
                },
            ]
        },
    });
};


module.exports = controller