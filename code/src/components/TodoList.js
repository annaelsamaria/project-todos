import React from 'react'
import { useSelector } from 'react-redux'
import { TodoInput } from 'components/TodoInput'
import { TodoItem } from 'components/TodoItem'
import { TodoSummary } from 'components/TodoSummary'
import { RemoveAll } from 'components/RemoveAll'
import styled from 'styled-components'

const Section = styled.section`
  width: 300px;
  background: #F1CB59; //gul
  border-radius: 20px;
  padding: 20px;
  margin: 20px auto;

  @media (min-width: 667px){
    width: 400px;
  }
`

const H1 = styled.h1`
  font-size: 50px;
  color: #F5F0D7; //ljusgul
  margin: 0;
`


export const TodoList = () => {
  const list = useSelector(store => store.todos.list);

  return (
    <Section>
      <H1>my todos:</H1>
      <TodoInput />
      {list.items.map((item, index) => (
        <TodoItem itemIndex={index}></TodoItem>
      ))}
      <RemoveAll />
      <TodoSummary />
    </Section>
  );
};