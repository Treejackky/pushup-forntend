exports.getLang = (trans, lang, key) => {
    const item = trans.find(t => t.lang === lang);
    return item ? item[key] : null;
}