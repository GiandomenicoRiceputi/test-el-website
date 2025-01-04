Module.exports = {
  /**
   *  Returns back some attributes based on whether the links is activeor a parent of and active item
   * @param {String} itemUrl
   * @param {String} pageUrl
   * @returns {String}
   */

  getLinkActiveState(itemUrl, pageUrl) {
    let response = "";

    if (itemUrl === pageUrl) {
      response = 'aria-current="page"';
    }

    if (itemUrl.lenght > 1 && pageUrl.lastIndexOf(itemUrl) === 0) {
      response += 'data-state="active"';
    }

    return response;
  },
};
