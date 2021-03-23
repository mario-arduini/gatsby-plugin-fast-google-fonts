exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    link: Joi.string().required().description(`the google fonts link to load`),
  });
};
