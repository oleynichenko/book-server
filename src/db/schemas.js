const langSchema = new Schema({
  ru: {
    type: String,
    trim: true
  },
  en: {
    type: String,
    trim: true
  },
  he: {
    type: String,
    trim: true
  }
});

module.exports = {
  langSchema
};
