import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Radio from "../Radio/Radio";
import Title from "../Title/Title";
import Validator from "../../utils/Validator";

const types = {
  twitter: "twitter",
  article: "article",
  note: "note",
};

class Form extends Component {
  state = {
    type: types.twitter,
    errors: {},
  };

  handleRadioButtonChange = (ev) => {
    this.setState({
      type: ev.target.value,
      errors: {},
    });
  };

  validate = (ev) => {
    ev.preventDefault();

    const fields = Array.from(ev.target.elements).filter(
      (item) =>
        !(item.name === "types" || item.nodeName.toLowerCase() === "button")
    );

    const errors = Validator.validateForm(fields);

    if (errors instanceof Object && Object.keys(errors).length) {
      this.setState({ errors });
    } else {
      const newItem = fields.reduce(
        (prev, current) => {
          prev[current.name] = current.value;
          return prev;
        },
        { type: this.state.type }
      );
      this.props.onSubmit({
        ...newItem,
      });
    }
  };

  render() {
    const { type, errors } = this.state;

    const titleLabel = type === types.twitter ? "Twitter Name" : "Title";
    const linkLabel = type === types.twitter ? "Twitter link" : "Link";
    const titleType =
      type === types.twitter ? "favorite Twitter account" : types[type];

    return (
      <div>
        <Title>Add new {titleType}</Title>
        <form
          className={styles.form}
          autoComplete="off"
          noValidate
          onSubmit={this.validate}
        >
          <div className={styles.radioWrapper}>
            <Radio
              name="types"
              value="twitter"
              checked={type === types.twitter}
              onChange={this.handleRadioButtonChange}
            >
              Twitter
            </Radio>
            <Radio
              name="types"
              value="article"
              checked={type === types.article}
              onChange={this.handleRadioButtonChange}
            >
              Article
            </Radio>
            <Radio
              name="types"
              value="note"
              checked={type === types.note}
              onChange={this.handleRadioButtonChange}
            >
              Note
            </Radio>
          </div>
          <Input
            error={errors.title}
            errorMessage="Field is empty"
            name="title"
            label={titleLabel}
          />
          {type !== types.note ? (
            <Input
              error={errors.link}
              errorMessage="URL is not valid"
              type="url"
              name="link"
              label={linkLabel}
            />
          ) : null}
          {type === types.twitter ? (
            <Input
              error={errors.image}
              errorMessage="Image is not valid"
              type="url"
              name="image"
              label="Image"
            />
          ) : null}
          <Input
            error={errors.description}
            errorMessage="Description is too short"
            tag="textarea"
            name="description"
            label="Description"
          />
          <Button>add new item</Button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
