/**
 *  Takes a collection and returns it back in display order
 *
 * @param {Array} addCollection
 * @returns {Array}
 */

module.exports = (collection) =>
  collection.sort((a, b) =>
    Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1
  );
