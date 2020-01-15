const Dev = require('../Schema/Dev');

const parseStringAsArray = require('../utils/parseStringAsArray');

class SearchController {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;

    const techArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return res.json(devs);
  }
}

module.exports = new SearchController();
