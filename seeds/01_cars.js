
exports.seed = function(knex) {
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { Make: 'Honda', Model: 'Accord', Mileage: "11,000", VIN: '1N4AL234KAV345678' },
        { Make: 'Nissan', Model: 'Altima', Mileage: "18,000", VIN: '1N4AL234KAV3443578' },
      ]);
    });
};
