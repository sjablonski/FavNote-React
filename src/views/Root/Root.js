import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ArticlesView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesView";
import TwittersView from "../TwittersView/TwittersView";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import Form from "../../components/Form/Form";
import AlertBox from "../../components/AlertBox/AlertBox";
import AppContext from "../../context";
import { twitterAccounts } from "../../data/twitterAccounts";

class Root extends Component {
  state = {
    twitter: [...twitterAccounts],
    article: [],
    note: [],
    selectedItem: null,
    isFormModalOpen: false,
    isRemoveItemModalOpen: false,
  };

  toggleFormModal = () => {
    this.setState((prevState) => ({
      isFormModalOpen: !prevState.isFormModalOpen,
    }));
  };

  toggleRemoveItemModal = (item) => {
    this.setState((prevState) => ({
      selectedItem: item,
      isRemoveItemModalOpen: !prevState.isRemoveItemModalOpen,
    }));
  };

  addItem = (newItem) => {
    newItem["uuid"] = uuidv4();
    this.setState((prevState) => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
      isFormModalOpen: false,
    }));
  };

  removeItem = (item) => {
    this.setState((prevState) => ({
      [item.type]: prevState[item.type].filter((el) => el.uuid !== item.uuid),
      selectedItem: null,
      isRemoveItemModalOpen: false,
    }));
  };

  render() {
    const { isFormModalOpen, isRemoveItemModalOpen, selectedItem } = this.state;

    const contextElements = {
      ...this.state,
      toggleFormModal: this.toggleFormModal,
      toggleRemoveItemModal: this.toggleRemoveItemModal,
    };

    return (
      <AppContext.Provider value={contextElements}>
        <BrowserRouter>
          <Header toggleModalFn={this.toggleFormModal} />
          <Switch>
            <Route exact path="/" component={TwittersView} />
            <Route path="/articles" component={ArticlesView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
          {isFormModalOpen ? (
            <Modal toggleModalFn={this.toggleFormModal}>
              <Form onSubmit={this.addItem} />
            </Modal>
          ) : null}
          {isRemoveItemModalOpen ? (
            <Modal toggleModalFn={this.toggleRemoveItemModal}>
              <AlertBox
                onClickCancel={this.toggleRemoveItemModal}
                onClickAccept={() => this.removeItem(selectedItem)}
              />
            </Modal>
          ) : null}
        </BrowserRouter>
      </AppContext.Provider>
    );
  }
}

export default Root;
