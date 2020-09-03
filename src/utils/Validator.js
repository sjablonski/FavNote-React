const isNotEmpty = (field) => {
  return field.value.trim() !== "";
};

const isAtLeast = (field, min) => {
  return field.value.trim().length >= min;
};

const isImage = (field) => {
  return !!field.value.match(/\.(jpe?g|png|gif)$/gi);
};

const isLink = (field) => {
  return !!field.value.match(/^(https?:\/\/|www.)/gi);
};

class Validator {
  static validateForm(fields) {
    const errors = {};

    fields.forEach((field) => {
      let isValid = false;

      if (field.type === "text") {
        isValid = isNotEmpty(field);
      } else if (field.type === "url" && field.name === "image") {
        isValid = isImage(field);
      } else if (field.type === "url" && field.name === "link") {
        isValid = isLink(field);
      } else if (field.type === "textarea") {
        isValid = isAtLeast(field, 2);
      }

      if (!isValid) {
        errors[field.name] = true;
      }
    });

    return errors;
  }
}

export default Validator;
