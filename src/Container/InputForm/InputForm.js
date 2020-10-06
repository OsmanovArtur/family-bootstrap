import React from "react";
import classes from "../InputForm/InputForm.module.css";

import {
  FormControl,
  Button,
  InputGroup,
  FormGroup,
  Form,
} from "react-bootstrap";
import { Link } from "react-browser-router";
const InputForm = ({
  onChangeName,
  onChangeSername,
  onChangeImg,
  onChangeSocialNetworks,
  onChangeDeskription,
  pushNewProfile,
  valid,
}) => {
  return (
    <div className={classes.Container}>
      <h1>Введите нового члена семьи</h1>

      <InputGroup className={classes.Input} onChange={onChangeName}>
        <InputGroup.Text id="inputGroup-sizing-default">Имя</InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className={classes.Input} onChange={onChangeSername}>
        <InputGroup.Text id="inputGroup-sizing-default">
          Фамилия
        </InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className={classes.Input} onChange={onChangeImg}>
        <InputGroup.Text id="inputGroup-sizing-default">
          Изображение
        </InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className={classes.Input} onChange={onChangeSocialNetworks}>
        <InputGroup.Text id="inputGroup-sizing-default">
          Социальные сети
        </InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <FormGroup className={classes.Input} onChange={onChangeDeskription}>
        <h3>Информация</h3>
        <Form.Control as="textarea" rows={3} />
      </FormGroup>
      <Link to="/">
        <Button
          variant="secondary"
          className={classes.Btn}
          onClick={pushNewProfile}
          disabled={valid}
        >
          Добавить
        </Button>
      </Link>
      <Link to="/">
        <Button variant="secondary" className={classes.Btn}>
          Назад
        </Button>
      </Link>
    </div>
  );
};
export default InputForm;
